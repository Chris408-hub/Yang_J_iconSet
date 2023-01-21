const two = document.querySelector("#two");
const zero = document.querySelector("#zero");
const two_two = document.querySelector("#two_two");
const three = document.querySelector("#three");
const exclamation = document.querySelector("#exclamation");
const coins = document.querySelector("#coins");
const decoration = document.querySelector("#decoration");
const firecracker = document.querySelector("#firecracker");
const lantern = document.querySelector("#lantern");
const envelope = document.querySelector("#envelope");

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