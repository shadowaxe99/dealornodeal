import AVFoundation

class SoundManager {
    static let shared = SoundManager()
    private init() {}

    var audioPlayer: AVAudioPlayer?

    func playSound(filename: String) {
        guard let url = Bundle.main.url(forResource: filename, withExtension: "mp3") else { return }

        do {
            audioPlayer = try AVAudioPlayer(contentsOf: url)
            audioPlayer?.play()
        } catch {
            print("Unable to play sound")
        }
    }

    func stopSound() {
        audioPlayer?.stop()
    }
}