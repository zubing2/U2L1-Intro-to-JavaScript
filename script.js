const button = document.querySelector('button');

button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = `Player 1: ${name}`;
}

const button2 = document.querySelector('#button2');

button2.addEventListener("click", updatePoints);

function updatePoints() {
    const score = prompt("Enter a new score");
    button2.textContent = `Score: ${score}`;
}