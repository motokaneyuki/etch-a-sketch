const container = document.querySelector('.container');

let size = 16;
let gridSize = 400 / size; 

for (i = 0; i < size * size; i++){
    const grid = document.createElement('div'); 
    grid.classList.add('grid');
    grid.style.width = `${gridSize}px`;
    container.appendChild(grid);

    grid.addEventListener('mouseover', () => {
        grid.classList.add('mouseover');
    })
}


