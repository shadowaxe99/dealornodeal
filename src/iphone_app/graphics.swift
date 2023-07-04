import UIKit

class Graphics {
    static let shared = Graphics()
    
    func loadImage(name: String) -> UIImage? {
        return UIImage(named: name)
    }
    
    func loadBackground() -> UIImage? {
        return loadImage(name: "background")
    }
    
    func loadCaseImage(caseNumber: Int) -> UIImage? {
        return loadImage(name: "case\(caseNumber)")
    }
    
    func loadHostImage() -> UIImage? {
        return loadImage(name: "howie_mandel")
    }
    
    func loadContestantImage() -> UIImage? {
        return loadImage(name: "contestant")
    }
}