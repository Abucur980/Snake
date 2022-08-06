for (let i = 0; i < 100; ++i) {
    document.getElementById("game-board").insertAdjacentHTML("beforeend", '<div class="board-cell white"></div>');
    if (i === 44) {
        document.getElementsByClassName("board-cell")[44].classList.add("snake");
    }
}
