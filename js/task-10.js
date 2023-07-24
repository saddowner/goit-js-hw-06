
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes')

createButton.addEventListener('click', function() {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxSize = 30;
  let html = '';
  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    html += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxesDiv.innerHTML = html;
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}