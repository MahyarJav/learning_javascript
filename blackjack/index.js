let firstCard = Math.floor(Math.random() * (12 - 2) + 2);
let secondCard = Math.floor(Math.random() * (12 - 2) + 2);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let messageEl = document.getElementById("message-el")
let message = ""

let startGame = () => {
    renderGame();
}
let renderGame = () => {
    cardEl.textContent = `Cards: ${cards.map(Number)}`
    sumEl.textContent = `Sum: ${sum}`;
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}
let drawCard = () => {
    let card = Math.floor(Math.random() * (12 - 2) + 2)
    cards.push(card);
    sum += card;
    cardEl.textContent += ` ${card}`;
    renderGame();
}