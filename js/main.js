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
  margin:1vh 20px;
  padding:20px;
  overflow:auto;
  width:40vw;
  max-height:93vh;
}

/* 为代码添加高亮效果 */
#content > .selector{color: #A6E22E;}
#content > .property{color: #f92672;}

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
  position: fixed; left: 0; top: 0;
  transition: none;
  transform: rotateY(10deg) translateZ(-100px) ;
}
/* 然后我需要一张白纸来介绍我自己 */

/* 好了，接下来我要开始写简历了 */
`
let code2 = `
.paper{
  width:40vw;
  height:93vh;
  background:#fff;
  margin:1vh 20px 1vh 7vw;
  padding:20px;
  overflow:auto;
  border:1px solid;
  position: fixed; right: 0; top: 0;
  transition: none;
  transform: rotateY(-10deg) translateZ(-100px) ;
}  
`
let markdown = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
writeCode('',code1,createPaper)
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
  },0)
}
function createPaper(){
  let paper = document.createElement('pre')
  paper.className = 'paper'
  document.body.appendChild(paper)
  writeCode(code1,code2,fn3)
}
function fn3(){
  console.log('code2写完啦')
  writeMarkdown(markdown)
}
function writeMarkdown(markdown,callback){
  let n = 0 
  let paper = document.querySelector('.paper')
  let timer = setInterval(function(){
    n += 1
    paper.innerHTML = Prism.highlight(markdown.substring(0,n), Prism.languages.markdown, 'markdown')
    paper.scrollTop = paper.scrollHeight
    if(n >= markdown.length){
      window.clearInterval(timer)
      callback && callback.call()
    }
  },0)
}
