// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // set speed randomly
    this.speed = (Math.random() + 1) * 250;

    // set Initial prosition randomly
    this.initPosition();
};

Enemy.prototype.initPosition = function() {
    var maxRandom = 3;
    var minRandom = 0;

    this.x = -400 + (Math.floor((Math.random() * maxRandom) + minRandom) * 100);
    this.y = (Math.floor((Math.random() * maxRandom) + minRandom) * 90) + 50;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy is out of screen, it is called init again
    if(this.x > 505) {
        this.initPosition();
    }
    this.x += dt * this.speed;

    // if enemy and player are closed in 50, it will restart game;
    if(Math.abs(player.x - this.x) < 50 && Math.abs(player.y - this.y) < 50) {
        initGame();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';

    // set stride
    this.strideX = 101;
    this.strideY = 83;

    // set boundery of canvas
    this.bound = {
        left: 0,
        right: 505,
        up: -50,
        down: 450
    }

    // set finishLine position
    this.finishLine = 0;

    // locate player at the center
    this.initPosition();

    // for moving position
    this.moveX = this.x;
    this.moveY = this.y;
};

Player.prototype.initPosition = function() {
    this.x = 202;
    this.y = 400;
}

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.moveX;
    this.y = this.moveY;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle input for moving player with key event
Player.prototype.handleInput = function(dir) {
    if(isFinishGame) {
        return;
    }
    switch (dir) {
        case 'left':
            console.log('left');
            var x = this.x - this.strideX;
            if(x >= this.bound.left) {
                this.moveX = x;
            }
            break;
        case 'up':
            console.log('up');
            var y = this.y - this.strideY;
            if(y >= this.bound.up) {
                this.moveY = y;
                if(y < this.finishLine) {
                    finishGame();
                }
            }
            break;
        case 'right':
            console.log('right');
            var x = this.x + this.strideX;
            if(x < this.bound.right) {
                this.moveX = x;
            }
            break;
        case 'down':
            console.log('down');
            var y = this.y + this.strideY;
            if(y <= this.bound.down) {
                this.moveY = y;
            }
            break;
        default:

    }
};

// to check is this game over
var isFinishGame = false;

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player();
initGame();

// when starting game, it will be initialized
function initGame() {
    updateNotice('Cross the road!');
    isFinishGame = false;
    var enemyNum = 5;
    for(var i = 0; i < enemyNum; i++) {
        allEnemies[i] = new Enemy();
    }

    player = new Player();
}

// when finishing game, it will show popup and restart game
function finishGame() {
    updateNotice('Finally you win!!! Bugs are all disappeared! Game will be restarted within 5 seconds');
    isFinishGame = true;
    allEnemies = [];

    var restartTime = 0;
    var curruntTime = 5;
    showPopup(curruntTime);

    var timer = window.setInterval(function() {
        if(curruntTime > restartTime) {
            showPopup(--curruntTime);
        }
        else {
            clearInterval(timer);
            hidePopup();
            initGame();
        }
    }, 1000);
}

// updateNotice
function updateNotice(msg) {
    document.getElementById('notice').innerText = msg;
}

// show popup
function showPopup(msg) {
    document.getElementById("popup").className = 'show';
    document.getElementById("popupMsg").innerText = msg;
}

// hide popup
function hidePopup() {
    document.getElementById("popup").className = 'hide';
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
