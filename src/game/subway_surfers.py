"""
A text-based simulation of Subway Surfers gameplay.

Subway Surfers is an endless runner mobile game. Players take the role of young graffiti artists
who run through railroad tracks to escape from a police officer and his dog.

Core Game Mechanics:
- Endless runner format with continuous forward movement.
- Obstacle avoidance: dodging oncoming trains, barriers, and other hazards.
- Lane switching: players navigate three lanes by swiping left or right.
- Jumping and rolling: swiping up to jump over obstacles, down to roll under them.
- Collectibles: gathering coins and power-ups (Magnets, Jetpacks, Super Sneakers, 2x Multipliers).
"""

import random
import time

class SubwaySurferGame:
    def __init__(self):
        self.score = 0
        self.coins = 0
        self.multiplier = 1
        self.is_alive = True
        self.lanes = [-1, 0, 1]  # Left, Middle, Right
        self.current_lane = 0
        self.speed = 1.0

    def play_turn(self, action=None):
        if not self.is_alive:
            return "Game Over! Final Score: {}, Coins: {}".format(int(self.score), self.coins)

        # Increase speed gradually
        self.speed += 0.05
        self.score += (10 * self.speed * self.multiplier)

        # Randomly generate obstacles or coins
        event_type = random.choice(["obstacle", "coin", "powerup", "clear"])

        if event_type == "coin":
            collected = random.randint(1, 5)
            self.coins += collected
            return f"Collected {collected} coins! Current coins: {self.coins}"

        elif event_type == "powerup":
            powerup = random.choice(["Magnet", "Jetpack", "Super Sneakers", "2x Multiplier"])
            if powerup == "2x Multiplier":
                self.multiplier = 2
            return f"Got a powerup: {powerup}!"

        elif event_type == "obstacle":
            obstacle_lane = random.choice(self.lanes)
            if action and action == "dodge" and self.current_lane != obstacle_lane:
                return "Dodged the obstacle!"
            elif self.current_lane == obstacle_lane:
                if action in ["jump", "roll"]:
                    return f"Successfully {action}ed to avoid the obstacle!"
                else:
                    self.is_alive = False
                    return f"Hit by an obstacle in lane {obstacle_lane}! Game Over."
            else:
                return "Passed an obstacle safely."

        return "Clear path ahead. Keep running!"

if __name__ == "__main__":
    game = SubwaySurferGame()
    print("Welcome to Subway Surfers (Text Version)!")
    while game.is_alive:
        action = random.choice(["jump", "roll", "dodge", None])
        print(f"Action: {action}")
        print(game.play_turn(action))
        time.sleep(0.5)
        if game.score > 500:
            print("You escaped! (for now)")
            break
