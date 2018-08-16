let code1 = `/*
* 大家好，我是Enoch 
* 天空好像下雨，我好想做份简历
* 但是只用文字来介绍就太单调了
* 那就用代码来写吧
* 开始之前我需要一点样式 
*/

/* 首先为所有元素添加过渡效果 */
*{transition:all .3s;}

/* 白色背景太单调了，我们来点背景 */
body{background:#3F5263;}
#content>.token,body{color:#fff;}
#content{background:#1E1E1E;border-radius:5px;}

/* 文字离边框太近了 */
#content{
  margin:1vh 5vw;
  padding:20px;
  overflow:auto;
  max-height:93vh;
}

/* 为代码添加高亮效果 */
#content > .selector{color: #A6E22E;}
#content > .property{color: #f92672;}
#content > .punctuation{color: #FFFF00;}

/* 加一点炫酷的效果 */
#content{
  border:1px solid;
  animation: breath 0.5s infinite alternate-reverse;
}

/* 再来一点3D效果 */
html{
  perspective: 1000px;
}
#content {
  width:40vw;
  position: fixed; left: 0; top: 0;z-index:1;
  transform: rotateY(10deg) translateZ(-100px);
}

/* 然后我需要一张白纸来介绍我自己 */
`
let code2 = `
#paper{
  position: fixed; right: 0; top: 0;
  width:40vw;
  height:93vh;
  border:1px solid #fff;
  background:#fff;
  transform: rotateY(-10deg) translateZ(-100px);
  margin:1vh 5vw;
  padding:20px;
  overflow:auto;
  box-shadow: 0 0 10px 5px rgba(255,255,255,1);
}  

/* 好了，接下来我要开始写简历了 */
/* 请看右边 */
`
let code3 = `
/* 写完了，emmmmmm，好像哪里不对 */
/* 哦对了，这个简历是markdown格式的 */
/* 我需要把它翻译成HTML并更改一下样式 */
`
let code4 = `
/* 好啦，全部完成 */
/* 这就是我的会动的简历 */
/* 谢谢观看 */
`
let markdown = `
# 自我介绍
- 我叫 Enoch
- 21岁
- 目前就读于三峡大学
- 计算机学院 数字媒体技术专业
- 自学前端一年
- 希望应聘贵公司前端开发岗位

# 技能介绍
- 熟悉 Html5 CSS3
- 熟悉移动端开发,如媒体查询/动态REM
- 熟悉 ES5、ES6
- 熟悉 Vue ，了解组件/生命周期/vue-Router/vuex/双向绑定等相关知识
- 了解前后端接口交互，熟悉AJAX、JSONP等
- 熟悉 MVC设计模式


# 项目介绍
1. 苹果风格轮播
2. 网页简历
3. Canvas 画板
4. 键盘导航页
5. vue多人共享博客
6. 用代码动态生成简历

# 联系方式
- QQ：821293167
- 微信： Dreamqyq
- Email：qyqdream@foxmail.com 
- 手机：13707203193

# 链接
- [Github链接](https://github.com/dreamqyq)
- [博客链接](https://www.jianshu.com/u/150c4ef48860)
`

writeCode('',code1,function(){
  createPaper(function(){
    writeCode(code1,code2,function(){
      writeMarkdown(markdown,function(){
        writeCode(code1+code2,code3,function(){
          convertMarkdownToHtml(function(){
            writeCode(code1+code2+code3,code4)
          })
        })
      })
    })
  })
})

function writeCode(preCode,code,callback){
  let n = 0 
  let content = document.querySelector('#content')
  let style = document.querySelector('#style')
  preCode = preCode || ''
  let timer = setInterval(function(){
    n += 1
    content.innerHTML = Prism.highlight(preCode+code.substring(0,n), Prism.languages.css, 'css')
    style.innerHTML = preCode + code.substring(0,n)
    content.scrollTop = content.scrollHeight
    if(n >= code.length){
      window.clearInterval(timer)
      callback && callback.call()
    }
  },50)
}
function createPaper(callback){
  let paper = document.createElement('div')
  let paperContent = document.createElement('pre')
  paper.id = 'paper'
  paperContent.className = 'paperContent'
  paper.appendChild(paperContent)
  document.body.appendChild(paper)
  callback && callback.call()
}
function writeMarkdown(markdown,callback){
  let n = 0 
  let paper = document.querySelector('#paper')
  let content = document.querySelector('#paper > .paperContent')
  let timer = setInterval(function(){
    n += 1
    content.innerHTML = markdown.substring(0,n)
    paper.scrollTop = paper.scrollHeight
    if(n >= markdown.length){
      window.clearInterval(timer)
      callback && callback.call()
    }
  },50)
}
function convertMarkdownToHtml(callback){
  let markdownBody = document.createElement('div')
  markdownBody.className = 'html markdown-body'
  markdownBody.innerHTML = marked(markdown)
  let preMarkdown = document.querySelector('#paper > .paperContent')
  preMarkdown.classList.add('deactive')
  preMarkdown.addEventListener('transitionend',()=>{
    preMarkdown.replaceWith(markdownBody)
    markdownBody.classList.add('active')
  })

  callback && callback.call()
}
