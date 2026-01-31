const container = document.querySelector('.container');
const newGridButton = document.querySelector('.newGrid');

let size = 16;
let gridSize = 400 / size; 

etchASketch(size);

function etchASketch(size) {
    for (let i = 0; i < size * size; i++){
        const grid = document.createElement('div'); 
        grid.classList.add('grid');
        grid.style.width = `${gridSize}px`;
        container.appendChild(grid);

        grid.addEventListener('mouseover', () => {
            grid.classList.add('mouseover');
        })
    }
}

newGridButton.addEventListener('click', () => {
    container.textContent = '';
    let result = Number(prompt('What grid size would you like?', 'Choose from 1 - 100'));
    size = result;
    gridSize = 400 / result;
    
    etchASketch(size);
})
