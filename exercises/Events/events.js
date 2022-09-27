// prettier-ignore
/* eslint-disable */

const butts  = document.querySelector(".butts");
const coolButton  = document.querySelector(".cool");

function handleClick(){
    console.log("It Clicked");

}

const hooray = () => console.log("Hooray!");

butts.addEventListener("click", function () {
    console.log('im an anon');
})
coolButton.addEventListener("click", hooray)

butts.removeEventListener("click", function () {
    console.log('im an anon');
})

//listen on multiple items 
const buyButtons = document.querySelectorAll("button.buy")
console.log(buyButtons);

function buyItem(){
    console.log('BUYING ITEM');
}

function handleBuyButtonClick(buyButton){
    console.log('Binding the buy button');
    buyButton.addEventListener("click", buyItem)
}

// buyButtons.forEach(handleBuyButtonClick)
// buyButtons.addEventListener('click', buyItem)

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('you clicked it');
    })
})