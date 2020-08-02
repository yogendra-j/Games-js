const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

const randomSquare = () => {
  square.forEach((squareElement) => {
    squareElement.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  //for use outside function
  hitPosition = randomPosition.id;
};

square.forEach((squareElement) => {
  squareElement.addEventListener("click", () => {
    if (squareElement.id === hitPosition) {
      result++;
      score.textContent = result;
      clearInterval(timerMove);
      moveMole();
    }
  });
});

const moveMole = () => {
  randomSquare();
  timerMove = setInterval(randomSquare, 1000);
};

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerCount);
    clearInterval(timerMove);
    timeLeft.textContent = "GameOver!!! Your Final Score: " + result;
  }
};
// calling functions
let timerMove = null;
let timerCount = setInterval(countDown, 1000);
moveMole();
