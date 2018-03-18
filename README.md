frontend-nanodegree-arcade-game
===============================

# How to Run
In order to try to run this game,
First please clone this project or get download with zip file.
Then, drag to browser or double click the index.html file which you see on the root of the project.
Easy to run. Enjoy!

## css
It contains style sheet for beautiful styling your project.
    * style.css

## images
It contains game resource kind of the image of the enemy, or player. You can refer and use this folder for loading images on your project.

## js
It contains mainly javascript file for making to run the game logically.
    * app.js
        Logical codes for running this game just like key input for player.
    * engine.js
        Provide simple game engine to run game on the html5 canvas.
    * resource.js
        Provide easily to load images which is used on your project.

## index.html
It contains the layout for this project, and setting meta data for applying to each browser.

## README.md
It contains some kind of guides or introduction for this project.

# Manual
This arcade game will be started automatically.

## Player
Player looks like a boy.
He want to across the road as avoiding a lot of bugs.
He will be moved "left", "right", "up", "down" with arrow key in your keyboard.
If he approach to the water, you win and the game will be over.
Please note that the boy touch the enemies, the game will be restarted at the starting point.
After finishing the game, the popup will be shown and a new game will be started again within 5 seconds.
Enjoy your game!

## Enemy
Enemy looks like a bug.
Bugs have each speed, and move from left to right endlessly.
There are 5 bugs in this game.
Please avoid these bugs!

# How to implement
Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).
