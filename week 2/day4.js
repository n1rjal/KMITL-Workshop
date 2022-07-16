// classical way of doing function in JS
const addNumber = function (n1, n2) {
  return n1 + n2;
};

const result = addNumber(3, 4);

// new way of making function
// i.e. the way by using Arrow function
const multiplyNumber = (n1, n2) => {
  const result = n1 * n2;
  return result;
};

/**
 *
 * @param {Number} n1
 * @param {Number} n2
 * @param {()=>Number} functionFx
 * @returns Number
 */
const beautifulPrinter = (n1, n2, functionFx) => {
  console.log("Using beautiful printer");
  return functionFx(n1, n2);
};

const numbers = [1, 2, 3, 4, 5];

const sumOfEvenNumber = (accumulator, currentValue) => {
  if (currentValue % 2 == 1) {
    return accumulator;
  } else {
    accumulator = accumulator + currentValue;
    return accumulator;
  }
};

const initialValue = 0;
const sumOfEvenNumbersOnly = numbers.reduce(sumOfEvenNumber, initialValue);

const URL = "https://jsonplaceholder.typicode.com/todos/";
const contentInternetDiv = document.getElementById("contentInternet");

function makeHeadingOfAllTheTodos(todos) {
  for (let i = 0; i < todos.length; i++) {
    const newh2 = document.createElement("p");
    newh2.innerText = todos[i].title;
    if (todos[i].completed) {
      newh2.innerText += "✔️";
    } else {
      newh2.innerText += "❌";
    }
    contentInternetDiv.appendChild(newh2);
  }
}

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     makeHeadingOfAllTheTodos(data);
//   })
//   .catch((e) => {
//     const newh2 = document.createElement("p");
//     newh2.innerText = "Error loading the content";
//     contentInternetDiv.appendChild(newh2);
//   });

// console.log("This was in the last line of programs");

/*
    Async functions returns a promise like fetch
    Await is used to work with promises inside a async function
*/

async function my1stAsyncFunction() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    makeHeadingOfAllTheTodos(data);
  } catch (e) {
    const newh2 = document.createElement("p");
    newh2.innerText = "Error loading the content";
    contentInternetDiv.appendChild(newh2);
  }
}

my1stAsyncFunction().then(() => {});
