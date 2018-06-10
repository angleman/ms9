const ms9 = require('./')
const START   = 1 * new Date
setTimeout(function(){
  console.log(ms9(1 * new Date - START)) // 92μ
}, 88)