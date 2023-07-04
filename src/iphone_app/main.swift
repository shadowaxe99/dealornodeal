import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        let gameLogic = GameLogic()
        let contestant = Contestant(name: "Player")
        let host = Host(name: "Howie Mandel")
        let gameState = GameState(contestant: contestant, host: host, gameLogic: gameLogic)
        
        if let window = window, let gameViewController = window.rootViewController as? GameViewController {
            gameViewController.gameState = gameState
        }
        
        return true
    }
}

class GameViewController: UIViewController {
    var gameState: GameState?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        gameState?.gameLogic.startGame()
    }
}