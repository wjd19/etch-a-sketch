const container = document.querySelector('#container');
container.addEventListener('mouseover', () => {
    document.getElementById('container').style.color = "blue";
})
for (let i = 0; i < 16; i++) {
    const subContainer = document.createElement('div');
    subContainer.classList.add('subContainer');
    container.appendChild(subContainer);
    for (let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        subContainer.appendChild(grid);
    }
}

