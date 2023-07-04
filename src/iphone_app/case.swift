import Foundation

struct Case {
    var caseNumber: Int
    var caseValue: Int
    var isOpened: Bool

    init(caseNumber: Int, caseValue: Int) {
        self.caseNumber = caseNumber
        self.caseValue = caseValue
        self.isOpened = false
    }

    mutating func openCase() {
        self.isOpened = true
    }
}