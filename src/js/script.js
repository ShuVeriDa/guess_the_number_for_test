const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const diapasonInput = document.getElementById("diapasonInput");
const diapasonText = document.getElementById("diapasonText");
const setDiapason = document.getElementById("setDiapason");

let diapason = 100;
let randomNumber = 0
let attempts = 0;

const randomNumberFunc = () => {
 randomNumber = Math.floor(Math.random() * diapason) + 1
  console.log(randomNumber)
  return randomNumber
}

randomNumberFunc()


guessButton.addEventListener("click", () => {
  const guessNum = parseInt(guessInput.value)
  guessInput.max = guessNum

  if (isNaN(guessNum) || guessNum < 1 || guessNum > diapason) {
    message.textContent = `Введите корректное число от 1 до ${diapason}.`;
    return;
  }

  attempts++;

  if (attempts % 3 === 0) {
    if (randomNumber % 2 === 0) {
      hint.textContent = 'Число является четным'
    } else {
      hint.textContent = 'Число является нечетным'
    }
  } else {
    hint.textContent = ''
  }

  if (guessNum > randomNumber) {
    message.textContent = `${guessNum} больше, чем загаданное число.`;
  } else if (guessNum < randomNumber) {
    message.textContent = `${guessNum} меньше, чем загаданное число.`;
  } else {
    message.textContent = `Victory! Вы угадали число ${randomNumber} с ${attempts} попытки.`;
    hint.textContent = ''
    guessButton.disabled = true;
  }
});

setDiapason.addEventListener('click', (e) => {
  e.preventDefault()
  message.textContent = ''
  hint.textContent = ''
  diapason = diapasonInput.value
  guessButton.disabled = false;

  if (diapason < 1) {
    message.textContent = `Введите корректное число от 1 до ${diapason}`;
    return;
  }

  diapasonText.textContent = `Введите число от 1 до ${diapason}:`
  randomNumberFunc()
})