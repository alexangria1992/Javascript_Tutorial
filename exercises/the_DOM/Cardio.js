// prettier-ignore
/* eslint-disable */

// Make a DIV

const div = document.createElement("div")
//Add a class of wrapper to it
div.classList.add('wrapper');
//put it into the body 
document.body.appendChild(div);
//make an unordered list 
//Add three list items with the words "one, two three"

const ul = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`
//put that list into the wrapper 
div.innerHTML = ul;
// console.log(div);

//create an image 
const img =document.createElement('img')
//set the source to an img 
img.src = 'https://picsum.photos/600';
//set the width to an img 
img.width = 250;
// add a class of cute 
img.classList.add("cute")
// add an alt 
img.alt = "Cute Puppy"
//Appened that image to the wrapper 
div.appendChild(img)

// With HTML String, make a div with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>Paragraph 1 </p>
        <p>Paragraph 2</p>
    </div>
`;
//Put this div before the unordered list from above 
const ulElement =  div.querySelector('ul')
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning')
console.log(myDiv)
// console.log(myDiv.children[1]);
myDiv.firstElementChild.remove()
// myHTML.appendChild(ul)


//Create a function called generatePLayerCard that takes in 3 arguments: 
//age , name and height 
function generatePLayerCard(name, age,  height){
    const html =  ` 
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!
        </p>
        <button class="delete" type="button">&times;</button>
        </div>
    
    `
    return html;
}
// have that function return html that looks like this: 
// <div class="playerCard">
// <h2>Name - AGE</h2>
// <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!
//</p>
//</div>

// Make a new div with a class of cards 
const cards = document.createElement('div')
cards.classList.add('cards')
// Have that function make 4 cards 
let cardsHTML = generatePLayerCard('wes', 12, 150 )
console.log(cardsHTML);
cardsHTML +=  generatePLayerCard('scott', 12, 150 )
cardsHTML +=  generatePLayerCard('kait', 12, 150 )
cardsHTML +=  generatePLayerCard('snickers', 12, 150 )
// console.log(cardsHTML);
// append these cards to the div  
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards)

//Add a delete button so card is removed

//Select all the buttons 
const buttons = document.querySelectorAll('.delete')
console.log(buttons);
//Make delete functon
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
}

// loop over them and attach a listener   
buttons.forEach(button => button.addEventListener('click', deleteCard))