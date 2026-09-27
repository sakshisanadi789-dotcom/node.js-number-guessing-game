const readline = require('readline');

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to the Number Guessing Game!');
console.log('Guess a number between 1 and 100.');

function askGuess() {
  rl.question('Enter your guess: ', (input) => {
    const guess = Number(input);

    if (Number.isNaN(guess)) {
      console.log('Please enter a valid number.');
      askGuess();
      return;
    }

    attempts += 1;

    if (guess < randomNumber) {
      console.log('Too low! Try again.');
      askGuess();
    } else if (guess > randomNumber) {
      console.log('Too high! Try again.');
      askGuess();
    } else {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      rl.close();
    }
  });
}

askGuess();
