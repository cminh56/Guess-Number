let randomNumber = Math.floor(Math.random() * 100) + 1;  // Random number between 1 and 100
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userInput').value;
    attempts++;

    if (userGuess == randomNumber) {
        document.getElementById('message').textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        document.getElementById('attempts').textContent = attempts;
        document.getElementById('userInput').disabled = true;  // Disable input after correct guess
    } else if (userGuess < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }
    
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('userInput').value = '';  // Clear input field
    document.getElementById('userInput').focus();  // Focus on input field
}
