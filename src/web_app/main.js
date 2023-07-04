// Importing dependencies
import { GameState } from './game_logic.js';
import { Contestant } from './contestant.js';
import { Host } from './host.js';
import { Case } from './case.js';
import { startGame, selectCase, revealCase } from './game_logic.js';
import { updateScore, updateCases, updateDialogue } from './interface.js';
import { playSound, stopSound } from './sound.js';

// Initializing game state
let gameState = new GameState();

// Initializing contestant
let contestant = new Contestant();

// Initializing host
let host = new Host('Howie Mandel');

// Initializing cases
let cases = [];
for (let i = 1; i <= 26; i++) {
  cases.push(new Case(i));
}

// Starting the game
startGame(gameState, contestant, host, cases);

// Event listener for case selection
document.getElementById('case-list').addEventListener('click', (event) => {
  let selectedCaseNumber = event.target.dataset.caseNumber;
  selectCase(gameState, selectedCaseNumber);
  updateCases(gameState, cases);
  updateDialogue(gameState, host);
  playSound('case-selection');
});

// Event listener for case reveal
document.getElementById('reveal-button').addEventListener('click', () => {
  revealCase(gameState);
  updateScore(gameState, contestant);
  updateDialogue(gameState, host);
  playSound('case-reveal');
});

// Event listener for game restart
document.getElementById('restart-button').addEventListener('click', () => {
  gameState = new GameState();
  contestant = new Contestant();
  host = new Host('Howie Mandel');
  cases = [];
  for (let i = 1; i <= 26; i++) {
    cases.push(new Case(i));
  }
  startGame(gameState, contestant, host, cases);
  updateScore(gameState, contestant);
  updateCases(gameState, cases);
  updateDialogue(gameState, host);
  stopSound();
});