// prettier-ignore

// Function Expression
// const doctorize = function(firstName){
//     return `Dr. ${firstName}`
// }

// Arrow Functions

/*eslint-disable*/

// const inchToCM = (inches) =>   inches * 2.54;
 
// function add(a, b = 3){
//     const total = a + b;
//     return total;
// };

// const add = (a, b = 3) => total =  a + b;

// returning an object

// function makeABaby(first, last){
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0,
//     }
//     return baby
// }

// const makeABaby =  (first, last) =>  ({name: `${first} ${last}`,age: 0, })
    
//IIFE 

// (function(age) {
//     console.log('Running the anon function');
//     return `You are cool and ${age}`;
// })(10);

//METHODS

const alex = {
    name: "Alexandre Angrignon",
    // Method!
    sayHi: function(){
        console.log(this.name);
        return 'Hey Alex'
    },
    // Short hand Method 
    yellHi(){
        console.log("HEY ALEX");
    },
    // Arrow function 
    whisperHi: () => {
        console.log('hi alexxxx');
    }
}

// Callback functions
// click call back
const button = document.querySelector('.clicked')

function handleClick(){
    console.log('Great Clicking');
}
button.addEventListener("click", function(){
    console.log("Nice Job!!!");
})

//Timer Callback
setTimeout(() => {
    console.log("Done time to eat");
}, 1000)
