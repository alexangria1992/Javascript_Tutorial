/* eslint-disable */
const name = "alex";
const middle = "topher";
const last = `bos`;

const sentence = "she's so cool";

// const hello = "hello my name is " + name + " . Nice to meet you";

// let hello2 = "hello my name is ";
// hello2 = hello2 + name;
// hello2 = hello2 + " Nice to meet you";

const hello = `hello my name is ${name}. Nice to meet you. I am ${
  1 + 100
} years old`;

const html = ` 
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    </div>
`;

document.body.innerHTML = html;