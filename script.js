function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    const buttons = document.querySelectorAll('.game-btn');
    buttons.forEach(btn => btn.addEventListener('click', (e) => {
        console.log(btn.id);
        return btn.id;
    }));
}