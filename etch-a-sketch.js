const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let number = prompt("Enter the number of squares per side (the maximum is 100)");
    if (number > 100 || isNaN(number)) {
        alert("Number lower than 100 required!")
        location.reload();
    }
    
});

let rows = 16;
let cols = 16;

const container = document.querySelector('.container')

function addDivs(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows * cols; i++) {
        const content = document.createElement('div');
        content.classList.add('item');
        container.appendChild(content);
    }
    changeColor();
}

function changeColor() {
    const etchs = document.querySelectorAll('.item');
    etchs.forEach(etch => {
        etch.addEventListener('mouseover', () => {
            etch.style.backgroundColor = 'red';
        });
    });
}

addDivs(rows, cols);

/*let number = 16;

container.style.setProperty('grid-column', number);

let grid = number * number

for (let i = 0; i < grid; i++) {

    const content = document.createElement('div');
    content.classList.add('item');
    container.appendChild(content);

}*/



/*for (let j = 0; j < etchs.length; j++) {
    etchs[j].addEventListner('mouseover', () => {
        etchs[j].style.backgroundColor = 'blue'; 
    });
}*/


