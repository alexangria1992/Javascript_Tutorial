// prettier-ignore
/* eslint-disable */

const alex = document.querySelector(".wes")
console.log(alex.children)
console.log(alex.firstElementChild)
console.log(alex.lastElementChild)
console.log(alex.previousElementSibling)
console.log(alex.nextElementSibling)
console.log(alex.parentElement)
// console.log(alex.childNodes);

const p = document.createElement('p')
p.textContent = 'I will be removed';
document.body.appendChild(p)

p.remove();

console.log(p);

document.body.appendChild(p);