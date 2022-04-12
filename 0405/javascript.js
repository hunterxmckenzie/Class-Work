const circles = document.querySelector(".circle")

for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener("click", turnRed);
}

function turnRed() {
    circle.style.backgroundColor = "red";
}

function moveRight() {
    circle.classList.add("animate");
}

function animateElement() {
    turnRed();
    moveRight();
}


const circle = document.querySelector(".circle")