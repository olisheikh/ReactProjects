let leftCounter = document.querySelector(".left-counter");//statement
let rightCounter = document.getElementById("right-counter");

let leftImage = document.querySelector(".first-backet");
let rightImage = document.querySelector(".second-backet");

let lefterCounterValue = parseInt(leftCounter.innerText);
let rightCounterValue = parseInt(rightCounter.innerText);

leftImage.addEventListener("click", () => { // () -> Parenthesis.
  lefterCounterValue--;

  if (lefterCounterValue >= 0) {
    rightCounterValue++;

    leftCounter.innerHTML = lefterCounterValue;
    rightCounter.innerHTML = rightCounterValue;
  } else {
    lefterCounterValue = 0;
  }
});

rightImage.addEventListener("click", () => {
  rightCounterValue--;

  if (rightCounterValue >= 0) {
    lefterCounterValue++;

    leftCounter.innerHTML = lefterCounterValue;
    rightCounter.innerHTML = rightCounterValue;
  } else {
    rightCounterValue = 0;
  }
});


"Hi, I am Faizan"
"Anaya, how old are you?"
"123355"
"@#$%"
"1234567889000000"


let name = "Alex"; // string type
let age = 12; // Number type Integer Number
let price = 1000.00; // Number float Number
let vegetarian = false; // boolean - true/false
let mobile = null; // empty

document.write(name);