const currentSize = 16;
const grid = document.querySelector('.grid');
const currentColor = 'black';

let size = currentSize;
let color = currentColor;

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0 ; i < size * size ; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
        }
};
// function createGrid(size) {
//     grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//     grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//     for (let i = 0; i < size * size; i++) {
//         const gridElement = document.createElement('div');
//         gridElement.addEventListener('mousemove', changeColor);
//         grid.appendChild(gridElement);
//     }
// }

function changeColor(e) {
    if (e.buttons === 1)
        e.target.style.backgroundColor = currentColor;
}

createGrid(size);

