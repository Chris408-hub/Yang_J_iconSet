let fruitJuice = document.querySelector(".icons");

function logID() {
    console.log(this.ID);
}

fruitJuice.addEventListener('click', logID);