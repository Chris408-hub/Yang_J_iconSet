let two = document.querySelector("#two");
let zero = document.querySelector("#zero");
let two_two = document.querySelector("#two_two");
let three = document.querySelector("#three");
let exclamation = document.querySelector("#exclamation");
let coins = document.querySelector("#coins");
let decoration = document.querySelector("#decoration");
let firecracker = document.querySelector("#firecracker");
let lantern = document.querySelector("#lantern");
let envelope = document.querySelector("#envelope");

function logID() {
    console.log(this.id);
}

two.addEventListener('click', logID);
zero.addEventListener('click', logID);
two_two.addEventListener('click', logID);
three.addEventListener('click', logID);
exclamation.addEventListener('click', logID);
coins.addEventListener('click', logID);
decoration.addEventListener('click', logID);
firecracker.addEventListener('click', logID);
lantern.addEventListener('click', logID);
envelope.addEventListener('click', logID);