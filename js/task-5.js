"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
 
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});