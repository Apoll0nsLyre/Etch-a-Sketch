const currentSize = 16;
const grid = document.querySelector('.grid');
const currentColor = 'black';
let currentBackgroundColor = 'white';

const clearButton = document.getElementById('clear');
const sizeButton = document.getElementById('new-grid-size');
const colorButton = document.getElementById('color');
const backgroundColorButton = document.getElementById('backg-color');

let size = currentSize;
let color = currentColor;
let valueSize = document.getElementById("valueSize").value;
let backgroundColor = 'white';

document.getElementById('colorPalette').style.display = 'none';

colorButton.addEventListener('click', () => {
    if (document.getElementById('colorPalette').style.display === 'none') {
        document.getElementById('colorPalette').click();
    } else {
        document.getElementById('colorPalette').style.display = 'none';
    }
    color = document.getElementById('colorPalette').value;
});

clearButton.addEventListener('click', clearGrid);
sizeButton.addEventListener('click', changeSize);

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0 ; i < size * size ; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
        };
};

function changeBackgroundColor() {
    colorPalette.addEventListener('input', () => {
        backgroundColor = colorPalette.value;
        clearGrid(backgroundColor);
    });
    clearGrid(backgroundColor);
    colorPalette.click();
};

function changeColor(e) {
    if (e.buttons === 1)
        e.target.style.backgroundColor = color;
};

function clearGrid(b) {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        element.style.backgroundColor = b;
    });
    size = valueSize;
};

function changeSize() {
    size = document.getElementById("valueSize").value;
    createGrid(size);
    clearGrid(backgroundColor);
};

function clearGrid() {
    const gridArray = Array.from(grid.childNodes);
    gridArray.forEach((element) => {
        element.style.backgroundColor = backgroundColor;
    });
};

function eraser() {
    color = backgroundColor;
};

createGrid(size);


