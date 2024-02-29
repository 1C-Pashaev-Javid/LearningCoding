const logElement = document.getElementById('gameLog');
const statusElement = document.getElementById('status');

let playerHealth = 10;
let enemyHealth = 10;

function log(message) {
    logElement.innerHTML += `${message}<br>`;
}

function checkEndGame() {
    if (playerHealth <= 0) {
        statusElement.textContent = "Вы проиграли.";
        return true;
    } else if (enemyHealth <= 0) {
        statusElement.textContent = "Вы победили!";
        return true;
    }
    return false;
}

function enemyAction() {
    const actions = ['attack', 'block'];
    const randomIndex = Math.floor(Math.random() * actions.length);
    return actions[randomIndex];
}

function playerAction(action) {
    if (checkEndGame()) return;

    const enemyAct = enemyAction();
    if (action === 'attack' && enemyAct !== 'block') {
        log("Вы ударили врага.");
        enemyHealth -= 1;
    } else if (action === 'attack' && enemyAct === 'block') {
        log("Враг заблокировал ваш удар.");
    }

    if (enemyAct === 'attack' && action !== 'block') {
        log("Враг ударил вас.");
        playerHealth -= 1;
    } else if (enemyAct === 'attack' && action === 'block') {
        log("Вы заблокировали удар врага.");
    }

    if (checkEndGame()) return;

    log(`Здоровье игрока: ${playerHealth}, Здоровье врага: ${enemyHealth}`);
}

if (checkEndGame()) {
    document.querySelector('.action-button').disabled = true; // Disable buttons if the game is over
}
