1. Game State: This is a shared data schema that will be used across all files to keep track of the current state of the game. It will include variables like current contestant, current host, selected cases, remaining cases, etc.

2. Contestant: This is a shared class/structure that will be used to represent the contestant in the game. It will have properties like name, current score, etc.

3. Host: This is a shared class/structure that will be used to represent the host (Howie Mandel) in the game. It will have properties like name, current dialogue, etc.

4. Case: This is a shared class/structure that will be used to represent the cases in the game. It will have properties like case number, case value, etc.

5. Game Logic Functions: These are shared functions that will be used to control the game's logic. They will include functions like startGame(), selectCase(), revealCase(), etc.

6. Interface Functions: These are shared functions that will be used to update the game's interface. They will include functions like updateScore(), updateCases(), updateDialogue(), etc.

7. Sound Functions: These are shared functions that will be used to play sounds in the game. They will include functions like playSound(), stopSound(), etc.

8. DOM Element IDs: These are shared identifiers that will be used to reference specific elements in the game's interface. They will include IDs like "score", "case-list", "dialogue", etc.

9. Message Names: These are shared identifiers that will be used to send and receive messages between different parts of the game. They will include names like "game-start", "case-selected", "case-revealed", etc.

10. Asset Files: These are shared files that will be used to display graphics and play sounds in the game. They will include files in the "assets/images/", "assets/sounds/", and "assets/animations/" directories.