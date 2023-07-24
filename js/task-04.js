const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

let counterValue = 0;

function decrement () {
    counter.textContent = counterValue -= 1
}

function increment () {
    counter.textContent = counterValue += 1
}

