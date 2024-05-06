const input = document.querySelector("#input");
const counter = document.querySelector(".counter");
const toggleButton = document.querySelector("#toggle");
const resetButoon = document.querySelector('#reset')

let mode = "characters";

input.addEventListener("input", () => {
    let count = 0;

    if (mode === "characters") {
        count = input.value.length;

        counter.textContent = `${count} caractere(s)`;       
    } else {
    }
});

resetButoon.addEventListener('click',() => {
    console.log("funcionando")
    input.value = ''
    counter.textContent = "0 caractere(s)"
});