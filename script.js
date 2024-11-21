const makeRandColor = () => {
  //make a function for reused code
  const r = Math.floor(Math.random() * 255); //get a random number
  const g = Math.floor(Math.random() * 255); //get a random number
  const b = Math.floor(Math.random() * 255); //get a random number
  return `rgb(${r}, ${g}, ${b})`; // create a string with random numbers e.g. rgb(255,255,255)
};

const buttons = document.querySelectorAll("button"); //select all buttons

for (let button of buttons) {
  //go through all buttons
  button.addEventListener("click", colorize); //add event click and colorize
}

const h1s = document.querySelectorAll("h1"); //select all the h1
for (let h1 of h1s) {
  //go through all h2
  h1.addEventListener("click", colorize); // add event click and colorize
}

function colorize() {
  this.style.backgroundColor = makeRandColor(); //make style for backroundColor
  this.style.color = makeRandColor(); //make style for text
}
