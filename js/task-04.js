
const value = {
btnDecr: document.querySelector('button[data-action="decrement"]'),
number: document.querySelector('#value'),
btnIncr: document.querySelector('button[data-action="increment"]')
}

let counter = 0;

value.btnDecr.addEventListener("click", () => {
    counter = counter - 1;
    value.number.textContent = counter;
})

value.btnIncr.addEventListener("click", () => {
    counter += 1;
    value.number.textContent = counter;
});