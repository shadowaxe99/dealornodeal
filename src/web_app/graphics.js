// src/web_app/graphics.js

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

let assets = {
    host: 'assets/images/host.png',
    contestant: 'assets/images/contestant.png',
    case: 'assets/images/case.png',
};

function loadAssets() {
    for (let asset in assets) {
        let img = new Image();
        img.src = assets[asset];
        assets[asset] = img;
    }
}

function drawHost() {
    ctx.drawImage(assets.host, 50, 50);
}

function drawContestant() {
    ctx.drawImage(assets.contestant, 200, 50);
}

function drawCase(caseNumber, x, y) {
    ctx.drawImage(assets.case, x, y);
    ctx.fillText(caseNumber, x + 10, y + 30);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

loadAssets();

module.exports = {
    drawHost,
    drawContestant,
    drawCase,
    clearCanvas
};