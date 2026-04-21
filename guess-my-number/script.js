"use strict";

// initial state
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// element references
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const numberEl = document.querySelector(".number");
const againBtn = document.querySelector(".again");

// event listener added to again button to reset the game
againBtn.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    scoreEl.textContent = score;
    messageEl.textContent = "Start guessing...";
    numberEl.textContent = '?';
    guessInput.value = '';
});

// add event listener to check button
checkBtn.addEventListener("click", () => {
    const guessedNumberInput = guessInput.value;

    // validate if a number exists
    if (guessedNumberInput === "") {
        messageEl.textContent = "⛔️ No number!";
        return;
    }

    const guessedNumber = Number(guessedNumberInput);

    // validate number is an integer between 1 and 20
    if (
        Number.isNaN(guessedNumber) ||
        !Number.isInteger(guessedNumber) ||
        guessedNumber < 1 ||
        guessedNumber > 20
    ) {
        messageEl.textContent = "🚫 Invalid Number!";
        return;
    }

    if (guessedNumber === secretNumber) {
        // correct guess -> update high score
        messageEl.textContent = "🎉 Correct Number!";
        numberEl.textContent = secretNumber;

        highscore = score > highscore ? score : highscore;
        highscoreEl.textContent = highscore;

    } else {
        // wrong guess -> check if game over, or reduce score
        if (score > 1) {
            // reduce score path
            messageEl.textContent =
                guessedNumber > secretNumber ? "📈 Too high!" : "📉 Too low!";
            score--;
        } else {
            // game over path
            messageEl.textContent = "💥 You lost the game!";
            score = 0;
        }
        scoreEl.textContent = score;
    }
});
