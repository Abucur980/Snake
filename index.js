document.addEventListener('DOMContentLoaded', () => {
    // generate board grid 20x20
    for (let i = 0; i < 400; ++i) {
        document.getElementById('game-board').insertAdjacentHTML('beforeend', '<div class="board-cell"></div>');
    }

    let movement = 1;
    let snake = [81, 82, 83];
    let interval = 0;
    let cells = document.querySelectorAll(".board-cell");

    function startMovement() {
        // define the snake
        snake = [81, 82, 83];
        snake.forEach(index => cells[index].classList.add('snake'));
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
        const lastSnakeCell = snake.pop();
        // remove snake class from lastSnakeCell in order to create the effect of snake moving
        cells[lastSnakeCell].classList.remove('snake');
        // make the head of the snake turn
        snake.unshift(snake[0] + movement);

        cells[snake[0]].classList.add('snake');
    }

    document.addEventListener("keyup", snakeMovement);
    document.getElementsByClassName("start")[0].addEventListener("click", startMovement);
})