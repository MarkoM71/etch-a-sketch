const container = document.querySelector('.container')

let number = 16;

let grid = number * number

for (let i = 0; i < grid; i++) {


    const content = document.createElement('div');
    content.classList.add('item');
    

    container.appendChild(content);

}