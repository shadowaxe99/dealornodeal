import UIKit

class InterfaceController: UIViewController {
    @IBOutlet weak var scoreLabel: UILabel!
    @IBOutlet weak var caseCollectionView: UICollectionView!
    @IBOutlet weak var dialogueLabel: UILabel!
    
    let gameLogic = GameLogic()
    let contestant = Contestant()
    let host = Host()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupGame()
    }
    
    func setupGame() {
        gameLogic.startGame()
        updateScore()
        updateCases()
        updateDialogue()
    }
    
    func updateScore() {
        scoreLabel.text = "Score: \(contestant.currentScore)"
    }
    
    func updateCases() {
        caseCollectionView.reloadData()
    }
    
    func updateDialogue() {
        dialogueLabel.text = host.currentDialogue
    }
    
    @IBAction func caseSelected(_ sender: UIButton) {
        let caseNumber = sender.tag
        gameLogic.selectCase(caseNumber: caseNumber)
        updateScore()
        updateCases()
        updateDialogue()
    }
}

extension InterfaceController: UICollectionViewDataSource {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return gameLogic.remainingCases.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "CaseCell", for: indexPath) as! CaseCell
        let case = gameLogic.remainingCases[indexPath.row]
        cell.configureWithCase(case: case)
        return cell
    }
}

class CaseCell: UICollectionViewCell {
    @IBOutlet weak var caseButton: UIButton!
    
    func configureWithCase(case: Case) {
        caseButton.setTitle("\(case.caseNumber)", for: .normal)
    }
}