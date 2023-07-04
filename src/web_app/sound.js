// src/web_app/sound.js

let audioContext = new (window.AudioContext || window.webkitAudioContext)();

let sounds = {
    startGame: new Audio('assets/sounds/startGame.mp3'),
    selectCase: new Audio('assets/sounds/selectCase.mp3'),
    revealCase: new Audio('assets/sounds/revealCase.mp3'),
    win: new Audio('assets/sounds/win.mp3'),
    lose: new Audio('assets/sounds/lose.mp3')
};

function playSound(soundName) {
    if (sounds[soundName]) {
        sounds[soundName].play();
    } else {
        console.error(`Sound "${soundName}" not found.`);
    }
}

function stopSound(soundName) {
    if (sounds[soundName]) {
        sounds[soundName].pause();
        sounds[soundName].currentTime = 0;
    } else {
        console.error(`Sound "${soundName}" not found.`);
    }
}

export { playSound, stopSound };