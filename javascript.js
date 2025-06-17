const container = document.querySelector('.container');
const button = document.querySelector("#sizebtn")
const input = document.querySelector('.opacity')
let mouseDown = false;

document.addEventListener('dragstart', (e) => {
    e.preventDefault();
})

createGrid(18, 18)


function createGrid(rows, cols) {
    const total = rows * cols;

    for (let i = 0; i < total; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        container.appendChild(square);
        square.style.width = `${960 / rows}px`;
        square.style.height = `${960 / cols}px`;
        square.style.backgroundColor = 'white';
        square.style.opacity = 0.1;

        square.addEventListener("mouseover", (e) => {
            if (mouseDown === true) {
                if (square.style.backgroundColor == 'white') {
                    square.style.backgroundColor = setRandomColor();
                }
                square.style.opacity = input.value;
            }
        })
    }
}

function setRandomColor() {
    let random = Math.floor(Math.random() * 7);
    switch (random) {
        case 0:
            return "black";
        case 1:
            return "blue";
        case 2:
            return "red";
        case 3:
            return "orange";
        case 4:
            return "cyan";
        case 5:
            return "green";
        case 6:
            return "pink";
    }
}

button.addEventListener("click", () => {
    let size = 0;
    while (size == 0 || size > 64) {
        size = prompt("Field size up to 64:")
    }
    removeField();
    createGrid(size, size);
})

container.addEventListener("mousedown", () => {
    mouseDown = true;
})

container.addEventListener("mouseup", () => {
    mouseDown = false;
})


function removeField() {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}