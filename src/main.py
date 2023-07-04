import game_logic
import contestant
import host
import case
import graphics
import sound
import interface

def main():
    # Initialize game state
    game_state = game_logic.GameState()

    # Initialize contestant
    game_state.current_contestant = contestant.Contestant("Player 1")

    # Initialize host
    game_state.current_host = host.Host("Howie Mandel")

    # Initialize cases
    game_state.cases = case.initialize_cases()

    # Start game
    game_logic.startGame(game_state)

if __name__ == "__main__":
    main()