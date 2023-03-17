const container = document.querySelector('.container');
let valueSize = document.querySelector('#value');
valueSize.addEventListener('input', function() {
    let val = parseFloat(valueSize.value);
    console.log(typeof val, val);

});
let currentColor = 'black';
let backgroundColor = 'white';
let gridSize = valueSize;

function createGrid(size) {
    container.style.gridTemplateColumns = 'repeat($(size),1fr)';
    container.style.gridTemplateRows = 'repeat($(size),1fr)';
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mousemove', colorGrid);
        container.appendChild(gridElement);
    };
};

createGrid(gridSize);

function colorGrid(e){
    if (e.buttons === 1) {
    e.target.style.backgroundColor = currentColor;
    }
};

