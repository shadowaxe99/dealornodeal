import Foundation

struct GameState {
    var currentContestant: Contestant
    var currentHost: Host
    var selectedCases: [Case]
    var remainingCases: [Case]
}

struct GameLogic {
    static var gameState: GameState?

    static func startGame() {
        gameState = GameState(currentContestant: Contestant(), currentHost: Host(), selectedCases: [], remainingCases: Case.generateCases())
        Interface.updateScore()
        Interface.updateCases()
        Interface.updateDialogue()
        Sound.playSound(name: "game-start")
    }

    static func selectCase(caseNumber: Int) {
        guard let index = gameState?.remainingCases.firstIndex(where: { $0.caseNumber == caseNumber }) else { return }
        let selectedCase = gameState?.remainingCases.remove(at: index)
        gameState?.selectedCases.append(selectedCase!)
        Interface.updateCases()
        Sound.playSound(name: "case-selected")
    }

    static func revealCase() {
        guard let selectedCase = gameState?.selectedCases.last else { return }
        gameState?.currentContestant.score += selectedCase.caseValue
        Interface.updateScore()
        Sound.playSound(name: "case-revealed")
    }
}