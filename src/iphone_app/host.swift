import Foundation

class Host {
    var name: String
    var currentDialogue: String

    init(name: String, currentDialogue: String) {
        self.name = name
        self.currentDialogue = currentDialogue
    }

    func speak() {
        print("\(name): \(currentDialogue)")
    }

    func updateDialogue(newDialogue: String) {
        self.currentDialogue = newDialogue
    }
}

let howieMandel = Host(name: "Howie Mandel", currentDialogue: "Welcome to Deal or No Deal!")