
let firstContainer = document.querySelector("#firstContainer");
let gameContainer = document.querySelector("#gameContainer");
let calculatorContainer = document.querySelector("#calculatorContainer");
let bmiContainer = document.querySelector("#bmiContainer");
let easContainer = document.querySelector("#easContainer");
let timerContainer = document.querySelector("#timerContainer");

let gameButton = document.querySelector("#gameButton");
let calculatorButton = document.querySelector("#calculatorButton");
let bmiCalculatorButton = document.querySelector("#bmiCalculatorButton");
let easButton = document.querySelector("#easButton");
let timerButton = document.querySelector("#timerButton");

let goBackButton1 = document.querySelector("#goBackButton1");
let goBackButton2 = document.querySelector("#goBackButton2");
let goBackButton3 = document.querySelector("#goBackButton3");
let goBackButton4 = document.querySelector("#goBackButton4");
let goBackButton5 = document.querySelector("#goBackButton5");

// HomePage

gameButton.addEventListener("click", () => {
    firstContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
});

calculatorButton.addEventListener("click", () => {
    firstContainer.classList.add("hide");
    calculatorContainer.classList.remove("hide");
});

bmiCalculatorButton.addEventListener("click", () => {
    firstContainer.classList.add("hide");
    bmiContainer.classList.remove("hide");
});

easButton.addEventListener("click", () => {
    firstContainer.classList.add("hide");
    easContainer.classList.remove("hide");
});

timerButton.addEventListener("click", () => {
    firstContainer.classList.add("hide");
    timerContainer.classList.remove("hide");
});

// HomePage

// Game

goBackButton1.addEventListener("click", () => {
    gameContainer.classList.add ("hide");
    firstContainer.classList.remove("hide");
});

let computerChoiceDisplay = document.querySelector("#computerChoice");
let userChoiceDisplay = document.querySelector("#userChoice");
let resultOfGameDisplay = document.querySelector("#resultOfGame");
let Rock = document.querySelector("#Rock");
let Paper = document.querySelector("#Paper");
let Scissor = document.querySelector("#Scissor");

Rock.addEventListener("click", function (e) {
    userChoice=e.target.innerHTML
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice();
    getResult();
});

Paper.addEventListener("click", function (e) {
    userChoice=e.target.innerHTML
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice();
    getResult();
});

Scissor.addEventListener("click", function(e) {
    userChoice=e.target.innerHTML
    userChoiceDisplay.innerHTML=userChoice
    generateComputerChoice();
    getResult();
});

function generateComputerChoice() {
    const ramdomNumber = Math.floor(Math.random()*4)
    switch(ramdomNumber) {
        case 1:
            computerChoice="Rock"
            break;
        case 2:
            computerChoice="Paper"
            break;
        case 3:
            computerChoice="Scissor"
            break;
    }
    computerChoiceDisplay.innerHTML=computerChoice;
};

function getResult() {
    if (computerChoice === userChoice){
        resultOfGame="Draw!";
    }
    if (computerChoice === "Rock" && userChoice === "Paper"){
        resultOfGame="You Win!";
    }
    if (computerChoice === "Rock" && userChoice === "Scissor"){
        resultOfGame="You Lose!";
    }
    if (computerChoice === "Paper" && userChoice === "Scissor"){
        resultOfGame="You Win!";
    }
    if (computerChoice === "Paper" && userChoice === "Rock"){
        resultOfGame="You Lose!";
    }
    if (computerChoice === "Scissor" && userChoice === "Rock"){
        resultOfGame="You Win!";
    }
    if (computerChoice === "Scissor" && userChoice === "Paper"){
        resultOfGame="You Lose!";
    }
    resultOfGameDisplay.innerHTML=resultOfGame;
};

// Game

// Calculator

goBackButton2.addEventListener("click", () => {
    calculatorContainer.classList.add ("hide");
    firstContainer.classList.remove("hide");
});

// Calculator

// BMI

let result = document.querySelector("#demo");

goBackButton3.addEventListener("click", () => {
    bmiContainer.classList.add ("hide");
    firstContainer.classList.remove("hide");
});

function validateInput() {
    let Feet = document.querySelector("#inputFeet").value;
    let Inch = document.querySelector("#inputInch").value;
    let Weight = document.querySelector("#inputWeight").value;
    if (Feet=="" && Inch=="" && Weight==""){
        alert("Field must be filled out")
        return false;
    }
    calculateBMI(Feet,Inch,Weight)
    document.querySelector("#inputFeet").value="";
    document.querySelector("#inputInch").value="";
    document.querySelector("#inputWeight").value="";
};

let calculateBMI = function(Feet,Inch,Weight) {
    let nWeight = parseInt(Weight);
    let nFeet = parseInt(Feet);
    let nInch = parseInt(Inch);
    let totalInch = nFeet*12 + nInch;
    let bmi = 703 * nWeight / Math.pow(totalInch,2);
    result.innerHTML = bmi.toFixed(2);
    result.classList.add("demoBackground");
};

// BMI

// EAS

goBackButton4.addEventListener("click", () => {
    easContainer.classList.add ("hide");
    firstContainer.classList.remove("hide");
});

const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

let pixel = ''; 
let gridsize = 50;

const drawGrid = (screenSize) => {
  for(i = 0; i < screenSize ** 2; i++) {
    pixel = document.createElement('div')
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = '#1c1d20';
    screen.appendChild(pixel);
  }
  screen.style.gridTemplateColumns =  `repeat(${screenSize}, auto)`;
  screen.style.gridTemplateRows =  `repeat(${screenSize}, auto)`;
}

drawGrid(gridsize);

const clear = (request) => {
  if(request === 'resize'){
    gridsize = prompt('please enter a new grid size of not more than 100', 50);
    if(gridsize > 100 || gridsize === null){
    gridsize = 100;
  }
  }
  screen.innerHTML = '';
  drawGrid(gridsize);
  active();
}

let currentMode = 'black';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if(button.id === 'resize' || button.id === 'clear'){
      clear(button.id);
    }
    else{
      currentMode = button.id;
      clear(button.id);
    }
  });
});

const randomColor = () => {
  let color = 'rgba(';
  for(let i = 0;i< 3;i++){
    color += Math.floor(Math.random() * 255) + ',';
  }
  return color + '1)';
}

const active = () => {
  let pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pxl => { 
    pxl.addEventListener('mouseover', (e) => {
      let crntClr = getComputedStyle(pxl, null).getPropertyValue('background-color');
      switch(currentMode){
        case 'black':
          e.target.style.backgroundColor = 'rgba(0,0,0)';
          break;
        case 'colors':
          e.target.style.backgroundColor = randomColor();
          break;
      }
    });
  });
}
active();

// EAS

// Timer

goBackButton5.addEventListener("click", () => {
    timerContainer.classList.add ("hide");
    firstContainer.classList.remove("hide");
});

const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let seconds = 0,
  minutes = 0,
  hours = 0;


const startTime = () => {
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
  
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }
    }
    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;
    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
});

pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0);
  intervalId = setInterval(startTime, 1000);
});

// Timer
