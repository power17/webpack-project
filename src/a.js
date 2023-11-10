import('./b.js');
let add = (a, b) => a + b
console.log(add(3, 5))

import img from './sky.jpg'
console.log(img)
window.onload = () => {
  let dom = `<img src="${img}">`
  document.getElementById('main').innerHTML = dom
}