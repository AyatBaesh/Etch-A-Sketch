//grid elements
const gridContainer = document.querySelector('#sketchpad');
const gridSize = document.querySelector('#gridSize');
const gridSizeLabel = document.querySelector('#gridSizeLabel');

//color-pickers
const colorPicker = document.querySelector('#colorPicker');
const backgroundColorPicker = document.querySelector('#backgroundColorPicker');

//buttons
const clearButton = document.querySelector('#clear');
const eraserButton = document.querySelector('#eraser');
const colorButton = document.querySelector('#chosenColor');
const backgroundColorButton = document.querySelector('#backgroundColor');
const createGridButton = document.querySelector('#gridSizeButton');
//defaultColors
let currentColor = '#000000';
let currentBackgroundColor = 'rgb(236, 229, 199)';

//color changing
colorButton.addEventListener('click', (event) => { //COLOR BUTTON functionality
    currentColor = colorPicker.value;
});

function  createGrid(size){//CREATING GRID
    gridContainer.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);  //Setting rows sizing
    gridContainer.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);   //Setting columns sizing
    for(let i = 0; i < size * size; i++){   
        let gridItem = document.createElement('div');   //creating Grid item element
        gridItem.classList.add('grid-item');    //adding grid-item class to every element
        gridItem.innerText = '';
        gridContainer.appendChild(gridItem);    //Filling grid with elements
        gridItem.style.backgroundColor = `${currentBackgroundColor}`;
    }            
}

function removeGrid(){  //REMOVING GRID
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function gridFunctionality(gridItem){
    gridItem.forEach((item) => {
        item.addEventListener('mouseover', event => {   //changing grid elements color on mouseover
            item.style.backgroundColor = `${currentColor}`;
        });
    });
    clearButton.addEventListener('click', event => {    //CLEAR BUTTON functionality
        gridItem.forEach((item) => {
            item.style.backgroundColor = `${currentBackgroundColor}`;
        });
    });
    eraserButton.addEventListener('click', (event) => { //ERASER BUTTON functionality (will work outside the function aswell)
        currentColor = `${currentBackgroundColor}`;
    });
    backgroundColorButton.addEventListener('click',(event) => { // BACKGROUND COLOR BUTTON button functionality
        currentBackgroundColor = backgroundColorPicker.value;
        gridItem.forEach((item) => {
            item.style.backgroundColor = `${currentBackgroundColor}`;
        });
    });
}

createGridButton.addEventListener('click', (event) => {
        removeGrid();
        createGrid(gridSize.value);
        let gridItem = document.querySelectorAll('.grid-item');
        gridFunctionality(gridItem);
});
gridSize.addEventListener('change', (event) => { // GRID SIZE CHANGING
    gridSizeLabel.innerText = `Grid size: ${gridSize.value}x${gridSize.value}`; //updating current size text    
});

