import Foundation

struct Contestant {
    var name: String
    var currentScore: Int
    var selectedCase: Case?

    init(name: String) {
        self.name = name
        self.currentScore = 0
        self.selectedCase = nil
    }

    mutating func selectCase(_ case: Case) {
        self.selectedCase = case
    }

    mutating func updateScore(_ value: Int) {
        self.currentScore += value
    }
}