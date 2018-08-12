var code = `/*
* 大家好，我是Enoch 
* 天空好像下雨，我好想做份简历
* 但是只用文字来介绍就太单调了
* 那就用代码来写吧
* 开始之前我需要一点样式 
*/

/* 首先为所有元素添加过渡效果 */
*{transition:all .3s;}
/* 白色背景太单调了，我们来点背景 */
body{background:#1E1E1E;color:#fff;}
#content > .token{color:#fff;}
/* 文字离边框太近了 */

/* 为代码添加高亮效果 */
#content {color: #f8f8f2;}
#content > .comment{color: #708090;}
#content > .selector{color: #A6E22E;}
#content > .property{color: #f92672;}
#content > .punctuation{color: #f8f8f2;}
`
writeCode('',code,fn)
function writeCode(preCode,code,callback){
  let n = 0 
  preCode = preCode || ''
  let timer = setInterval(function(){
    n += 1
    content.innerHTML = Prism.highlight(preCode+code.substring(0,n), Prism.languages.css, 'css')
    style.innerHTML = preCode + code.substring(0,n)
    if(n >= code.length){
      window.clearInterval(timer)
      callback()
    }
  },50)
}
function fn(){
  console.log('写完啦')
}
