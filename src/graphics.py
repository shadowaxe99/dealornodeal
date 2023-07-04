import pygame
from pygame.locals import *

# Initialize Pygame
pygame.init()

# Set the dimensions of the window
display_width = 800
display_height = 600

# Create the window
gameDisplay = pygame.display.set_mode((display_width, display_height))

# Load the images
host_image = pygame.image.load('assets/images/howie_mandel.png')
case_image = pygame.image.load('assets/images/case.png')
contestant_image = pygame.image.load('assets/images/contestant.png')

def draw_host(x, y):
    gameDisplay.blit(host_image, (x, y))

def draw_case(x, y):
    gameDisplay.blit(case_image, (x, y))

def draw_contestant(x, y):
    gameDisplay.blit(contestant_image, (x, y))

def update_display():
    pygame.display.update()

def clear_display():
    gameDisplay.fill((0,0,0))