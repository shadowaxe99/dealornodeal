import pygame

class SoundManager:
    def __init__(self):
        pygame.mixer.init()

    def play_sound(self, sound_file):
        pygame.mixer.Sound(sound_file).play()

    def stop_sound(self):
        pygame.mixer.stop()

sound_manager = SoundManager()