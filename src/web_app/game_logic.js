var gameState = {
  currentContestant: null,
  currentHost: null,
  selectedCases: [],
  remainingCases: []
};

var startGame = function(contestantName) {
  gameState.currentContestant = new Contestant(contestantName);
  gameState.currentHost = new Host("Howie Mandel");
  gameState.selectedCases = [];
  gameState.remainingCases = generateCases();
  updateInterface();
};

var selectCase = function(caseNumber) {
  var selectedCase = gameState.remainingCases.find(function(c) {
    return c.number === caseNumber;
  });
  if (selectedCase) {
    gameState.selectedCases.push(selectedCase);
    gameState.remainingCases = gameState.remainingCases.filter(function(c) {
      return c.number !== caseNumber;
    });
    updateInterface();
  }
};

var revealCase = function() {
  var selectedCase = gameState.selectedCases.pop();
  if (selectedCase) {
    gameState.currentContestant.score += selectedCase.value;
    updateInterface();
  }
};

var generateCases = function() {
  var cases = [];
  for (var i = 1; i <= 26; i++) {
    cases.push(new Case(i, Math.floor(Math.random() * 1000000)));
  }
  return cases;
};

var updateInterface = function() {
  updateScore(gameState.currentContestant.score);
  updateCases(gameState.remainingCases);
  updateDialogue(gameState.currentHost.dialogue);
};