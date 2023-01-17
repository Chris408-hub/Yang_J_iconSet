let fruitJuice = document.querySelector("#orangeJuice");

function colorChange() {
    this.style.color = 'green';
}

fruitJuice.addEventListener('click', colorChange);