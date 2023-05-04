
let defaultRow = 16;
let defaultColumn = 16;

const btn = document.querySelector('#btn');
//const container = document.querySelector('.grid')

btn.addEventListener('click', () => {
    const container = document.querySelector('.grid');
    let allItems = document.querySelectorAll('.item');
    let itemsArray = [...allItems];
    itemsArray.forEach((item) => {
        container.removeChild(item);
    })
    let number = prompt("Enter the number of squares per side (number must be from 2 to 100)");
    if (number < 2 || number > 100 || isNaN(number)) {
        alert("A number from 2 to 100 required!")
        location.reload();
    } 
    addDivs(number, number);

});

function addDivs(row, column) {
    let gridSize = row * column;
    const container = document.querySelector('.grid');

    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', column);

    for (let i = 0; i < gridSize; i++) {
        const content = document.createElement('div');
        content.classList.add('item');
        container.appendChild(content);      
    }
    changeColor();
}

addDivs(defaultRow, defaultColumn);

function changeColor() {
    const etchs = document.querySelectorAll('.item');
    etchs.forEach(etch => {
        etch.addEventListener('mouseover', () => {
            etch.style.backgroundColor = 'grey';
        });
    });
}




