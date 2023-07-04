import pygame
from src.game_logic import GameState
from src.contestant import Contestant
from src.host import Host
from src.case import Case

class Interface:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((800, 600))
        self.font = pygame.font.Font(None, 36)
        self.clock = pygame.time.Clock()

    def updateScore(self, contestant: Contestant):
        score_text = self.font.render(f"Score: {contestant.score}", True, (255, 255, 255))
        self.screen.blit(score_text, (10, 10))

    def updateCases(self, game_state: GameState):
        for i, case in enumerate(game_state.cases):
            case_text = self.font.render(f"Case {i+1}: {case.value}", True, (255, 255, 255))
            self.screen.blit(case_text, (10, 50 + i*40))

    def updateDialogue(self, host: Host):
        dialogue_text = self.font.render(host.dialogue, True, (255, 255, 255))
        self.screen.blit(dialogue_text, (10, 550))

    def update(self, game_state: GameState, contestant: Contestant, host: Host):
        self.screen.fill((0, 0, 0))
        self.updateScore(contestant)
        self.updateCases(game_state)
        self.updateDialogue(host)
        pygame.display.flip()

    def handleEvents(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return False
            elif event.type == pygame.MOUSEBUTTONDOWN:
                return True
        return None

    def run(self, game_state: GameState, contestant: Contestant, host: Host):
        while True:
            self.update(game_state, contestant, host)
            event_result = self.handleEvents()
            if event_result is False:
                break
            elif event_result is True:
                game_state.selectCase(pygame.mouse.get_pos())
        pygame.quit()