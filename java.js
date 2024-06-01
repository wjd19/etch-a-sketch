//get number of squares per side
function getNumSquares() {
    let numSquaresPerSide = prompt('How many squares per side in your grid?')
    while (numSquaresPerSide > 100) {
        numSquaresPerSide = prompt('You must have between 1 and 99 squares per side. Try again.');
    }
    return numSquaresPerSide;
}

//extra credit random color
function generateRandomColor() {
    let testHexVal = 0xff;
    let maxColorVal = 0xFFFFFF;
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}

//creating grid
const gridContainer = document.querySelector('#gridContainer');
function createGrid(numSquaresPerSide = 16) {
    for (let i = 0; i < numSquaresPerSide; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        for (let j = 0; j < numSquaresPerSide; j++) {
            const column = document.createElement('id');
            column.classList.add('column');
            row.appendChild(column);
            column.addEventListener('mouseover', function(e) {
                e.target.style.background = generateRandomColor();
            })
        }
    }
}

createGrid();

//custom grid size button event listener
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.getElementById('#gridContainer');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    numSquaresPerSide = getNumSquares();
    createGrid(numSquaresPerSide);
});


