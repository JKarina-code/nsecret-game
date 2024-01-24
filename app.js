let secretNumber = 0;
let attempts = 0;
let drawnNumbersList = [];
let numberMax = 10;

const addText = (element, text) => {
  document.querySelector(element).innerHTML = text;
  return;
};

const verifyAttempt = () => {
  let number = parseInt(document.getElementById("valueUser").value);
  if (number === secretNumber) {
    addText(
      "p",
      `You guessed the number right in ${attempts}  ${
        attempts === 1 ? "try" : "tries"
      } `
    );

    document.getElementById("restart").removeAttribute("disabled");
  } else {
    number > secretNumber
      ? addText("p", "The secret number is less")
      : addText("p", "The secret number is greater");
    attempts++;
    cleanBox();
  }

  return;
};

const cleanBox = () => {
  document.getElementById("valueUser").value = "";
};

const generateSecretNumber = () => {
  let generateNumber = Math.floor(Math.random() * numberMax) + 1;
  console.log(generateNumber);
  if (drawnNumbersList.length === numberMax) {
    addText("p", " All possible numbers have already been drawn.");
  } else {
    if (drawnNumbersList.includes(generateNumber)) {
      return generateSecretNumber();
    } else {
      drawnNumbersList.push(generateNumber);
      return generateNumber;
    }
  }
};

const initialConditions = () => {
  addText("h1", "Secret number game");
  addText("p", ` Add a number  from 1 to ${numberMax}`);
  secretNumber = generateSecretNumber();
  attempts = 1;
};

const restartGame = () => {
  cleanBox();
  initialConditions();
  document.getElementById("restart").setAttribute("disabled", "true");
};

initialConditions();
