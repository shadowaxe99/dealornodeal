// src/web_app/interface.js

let gameState = null;
let contestant = null;
let host = null;

function updateScore() {
    document.getElementById('score').innerText = contestant.currentScore;
}

function updateCases() {
    const caseList = document.getElementById('case-list');
    caseList.innerHTML = '';
    gameState.remainingCases.forEach((caseItem) => {
        const caseElement = document.createElement('div');
        caseElement.innerText = caseItem.caseNumber;
        caseElement.onclick = () => {
            selectCase(caseItem.caseNumber);
        };
        caseList.appendChild(caseElement);
    });
}

function updateDialogue() {
    document.getElementById('dialogue').innerText = host.currentDialogue;
}

function startGame() {
    fetch('/startGame')
        .then(response => response.json())
        .then(data => {
            gameState = data.gameState;
            contestant = data.contestant;
            host = data.host;
            updateScore();
            updateCases();
            updateDialogue();
        });
}

window.onload = startGame;