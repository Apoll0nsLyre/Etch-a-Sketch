const container = document.querySelector('.container');
let gridSize= 16;
// Create 256 square divs and append them to the container
function createGrid(size) {
    container.style.gridTemplateColumns = 'repeat($(size),1fr)';
    container.style.gridTemplateRows = 'repeat($(size),1fr)';
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
};

createGrid(gridSize);
