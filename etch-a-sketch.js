const container = document.querySelector('.container')

let number = 16;

let grid = number * number

for (let i = 0; i < grid; i++) {

    const content = document.createElement('div');
    content.classList.add('item');

    container.appendChild(content);

}

const etchs = document.querySelectorAll('.item');

etchs.forEach(etch => {
    etch.addEventListener('mouseover', () => {
    etch.style.backgroundColor = 'red';
    });
});


/*for (let j = 0; j < etchs.length; j++) {
    etchs[j].addEventListner('mouseover', () => {
        etchs[j].style.backgroundColor = 'blue'; 
    });
}*/


