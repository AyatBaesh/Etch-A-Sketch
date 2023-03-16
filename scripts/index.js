const gridContainer = document.querySelector('.grid');
const clearButton = document.querySelector('#clear');
const gridRange = document.querySelector('#grid-range');
const rangeLabel = document.querySelector('#range-label');

function  createGrid(rows,columns){
    gridContainer.style.setProperty('rows', rows);
    gridContainer.style.setProperty('columns', columns);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr)`);
    gridContainer.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr)`);
    
    for(let i = 0; i < rows*columns; i++){
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.innerText = '';
        gridContainer.appendChild(gridItem);
    }
    
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((item) => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = 'black';
    });
});
clearButton.addEventListener('click', event => {
    gridItem.forEach((item) => {
        item.style.backgroundColor = 'white';
    })
})
    
    
}

function removeGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


createGrid(16, 16);
gridRange.addEventListener('click', event => {
    removeGrid();
    rangeLabel.innerText = `grid size: ${gridRange.value}x${gridRange.value}`;
    createGrid(gridRange.value, gridRange.value);
});

