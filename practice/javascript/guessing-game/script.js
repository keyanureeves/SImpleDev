let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let guessCount = 1;
const maxGuesses = 10;

const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const guessesSpan = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');
const lowOrHigh = document.getElementById('lowOrHigh');

function checkGuess() {
  const userGuess = Number(guessField.value);
  guesses.push(userGuess);
  guessesSpan.textContent = guesses.join(', ');

  if (userGuess === randomNumber) {
    lastResult.textContent = '🎉 Congratulations! You got it right!';
    lowOrHigh.textContent = '';
    gameOver();
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = '❌ Game Over! You’re out of turns!';
    lowOrHigh.textContent = `The number was ${randomNumber}`;
    gameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = '📉 Too low!';
    } else {
      lowOrHigh.textContent = '📈 Too high!';
    }
    guessCount++;
  }

  guessField.value = '';
  guessField.focus();
}

function gameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  const restartButton = document.createElement('button');
  restartButton.textContent = '🔄 Play Again';
  document.body.appendChild(restartButton);

  restartButton.addEventListener('click', () => {
    guessCount = 1;
    guesses = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessesSpan.textContent = '';
    lastResult.textContent = '';
    lowOrHigh.textContent = '';
    guessField.value = '';
    guessField.focus();

    restartButton.remove();
  });
}

guessSubmit.addEventListener('click', checkGuess);
