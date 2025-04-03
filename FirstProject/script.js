let leftCounter = document.querySelector(".left-counter");
let rightCounter = document.getElementById("right-counter");

let leftImage = document.querySelector(".first-backet");
let rightImage = document.querySelector(".second-backet");

let lefterCounterValue = parseInt(leftCounter.innerText);
let rightCounterValue = parseInt(rightCounter.innerText);

leftImage.addEventListener("click", () => {
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
