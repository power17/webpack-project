import('./b.js');
import './b.css'
let add = (a, b) => a + b
console.log(add(3, 5))

import img from './sky.jpg'
import img1 from './sky1.jpg'
console.log(img)
console.log(img1)
window.onload = () => {
  let dom = `<img src="${img}">`
  let dom1 = `<img src="${img1}">`
  document.getElementById('main').innerHTML = dom
  document.getElementById('main1').innerHTML = dom1
}
