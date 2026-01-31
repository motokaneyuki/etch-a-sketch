const container = document.querySelector('.container');

let size = 16 * 16;

for (i = 0; i < size; i++){
    const grid = document.createElement('div'); 
    grid.classList.add('grid');
    container.appendChild(grid);
}

