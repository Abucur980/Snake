document.addEventListener('DOMContentLoaded', () => {
    // generate board grid 20x20
    for (let i = 0; i < 400; ++i) {
        document.getElementById('game-board').insertAdjacentHTML('beforeend', '<div class="board-cell"></div>');
    }

    let movement = 1;

    function snakeMovement(event) {
        // cells[currentIndex].classList.remove("snake");
        if(event.code === 'ArrowRight') {
            movement = 1 // pressing the right arrow will make the snake go right
            console.log(movement);
        } else if (event.code === 'ArrowUp') {
            movement = -20 // if we press the up arrow the snake goes back ten divs, appearing to go up
            console.log(movement);
        } else if (event.code === 'ArrowLeft') {
            movement = -1 // if we press left the snake will go left one div
            console.log(movement);
        } else if (event.code === 'ArrowDown') {
            movement = + 20 // if we press down the snake head will instantly appear in div ten divs from where you are now
            console.log(movement);
        }
    }

    document.addEventListener('keyup', snakeMovement);
})