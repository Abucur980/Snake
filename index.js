document.addEventListener('DOMContentLoaded', () => {
    // generate board grid 20x20
    for (let i = 0; i < 400; ++i) {
        document.getElementById('game-board').insertAdjacentHTML('beforeend', '<div class="board-cell"></div>');
    }

    let movement = 1;
    let snake = [81, 82, 83];
    let interval = 0;
    let cells = document.querySelectorAll(".board-cell");

    function resetGame() {
        snake.forEach(index => {
            cells[index].classList.remove('snake');
        });
        cells.forEach(element => {
            element.classList.remove("apple");
        });
        movement = 1;
        clearInterval(interval);
    }

    function startMovement() {
        document.getElementsByClassName("start")[0].style.display = "none";
        resetGame();
        // define the snake
        snake = [83, 82, 81];
        snake.forEach(index => cells[index].classList.add('snake'));
        randomFruits()
        // call the function movementResults once in 250 milliseconds
        interval = setInterval(movementResults, 250);
    }

    function snakeMovement(event) {
        if(event.code === 'ArrowUp') {
            // if we press the up arrow the snake goes back 20 divs, appearing to go up
            movement = -20;
        } else if (event.code === 'ArrowRight') {
            // pressing the right arrow will make the snake go right
            movement = 1;
        } else if (event.code === 'ArrowDown') {
            // if we press down the snake head will instantly appear in div 20 divs from where you are now
            movement = 20;
        } else if (event.code === 'ArrowLeft') {
            // if we press left the snake will go left one div
            movement = -1;
        }
    }

    function movementResults() {
        // game over
        if (
            // movement is used in order to have the edgy moves
            // if the snake hits the top edge
            (snake[0] - 20 < 0 && movement === -20) ||
            // if the snake hits the right edge
            (snake[0] % 20 === 19 && movement === 1) ||
            // if the snake hits the bottom edge
            (snake[0] + 20 >= 400 && movement === 20) ||
            // if the snake hits the left edge
            (snake[0] % 20 === 0 && movement === -1) ||
            // if the snake tries to go backwards or tries to go into itself
            cells[snake[0] + movement].classList.contains("snake")
        ) {
            // if any of the conditions is met, stop the movement
            document.getElementById('dialog-dark-rounded').showModal();
            return clearInterval(interval);
        }

        const lastSnakeCell = snake.pop();
        // remove snake class from lastSnakeCell in order to create the effect of snake moving
        cells[lastSnakeCell].classList.remove('snake');
        // make the head of the snake turn
        snake.unshift(snake[0] + movement);

        // if the snake eats a fruit
        if(cells[snake[0]].classList.contains('apple')) {
            cells[snake[0]].classList.remove('apple')
            cells[lastSnakeCell].classList.add('snake')
            snake.push(lastSnakeCell)
            randomFruits()
          }

        cells[snake[0]].classList.add('snake');
    }

    function randomFruits() {
        let fruitIndex = Math.floor(Math.random() * cells.length);
        while(cells[fruitIndex].classList.contains('snake')) {
            fruitIndex = Math.floor(Math.random() * cells.length);
        }
        cells[fruitIndex].classList.add('apple')
      }

    document.addEventListener("keyup", snakeMovement);
    document.getElementsByClassName("start")[0].addEventListener("click", startMovement);
    document.getElementsByClassName("is-warning")[0].addEventListener("click", startMovement);
})