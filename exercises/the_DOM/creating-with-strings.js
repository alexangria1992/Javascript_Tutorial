// prettier-ignore
/* eslint-disable */
console.log('it works');
const item = document.querySelector(".item")

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup <img onload="alert('HACKED')" src="https://picsum.photos/50"/></style>`

const myHTML = `
<div class="wrapper">
    <h2>Cute  ${desc}</h2>
    <img src="${src}" alt="${desc}" />
</div>

`

// turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.appendChild(myFragment);
// console.log(myFragment.querySelector('img'))
// console.log(myFragment)

// item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img')

// itemImage.classList.add('round')

// console.log(typeof myHTML)
// console.log(itemImage)

