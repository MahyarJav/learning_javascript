let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let messageEl = document.getElementById("message-el")
let message = "";
let player = {
    name: "Mahyar",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: \$${player.chips} `

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function getRandomCard() {
    let rNumber = Math.floor(Math.random() * 13 + 1);
    if (rNumber >= 11) {
        rNumber = 10;
    } else if (rNumber == 1) {
        rNumber = 11;
    }
    return rNumber;
}

function renderGame() {
    cardEl.textContent = `Cards: ${cards.map(Number)} `;
    sumEl.textContent = `Sum: ${sum} `;
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
function drawCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}