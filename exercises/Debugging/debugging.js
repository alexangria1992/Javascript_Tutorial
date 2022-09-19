// prettier-ignore

// Console Methods
const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'America' },
  { name: 'Snickers', cool: true, country: 'Dog Country' },
];

people.forEach((person, index) => {
  //   console.log(person.name);
  //   console.group(` ${person.name}`);
  //   console.log(person.country);
  //   console.log(person.cool);
  //   console.log('Done!');
  //   console.groupEnd(`${person.name}`);
  console.log(person.name);
});

// console.table(people);

// Callstack, Stack trace

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}`;
});

async function fetchDadJoke(params) {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
