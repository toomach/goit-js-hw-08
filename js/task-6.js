"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector('input');
const createButton = document.querySelector('button[data-create]');
const destroyButton  = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {

  const amount = Number.parseInt(input.value);
  
  if (amount < 1 || amount > 100) {
    return alert('Enter a number from 1 to 100!');
  }

  destroyBoxes();

  let size = 30;
  const boxesList = [];

  for (let i = 0; i < amount; i += 1){
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();    
    size += 10;
    boxesList.push(box);
  }
  boxesDiv.append(...boxesList);
  input.value = ''; 
};

function destroyBoxes() {
  boxesDiv.innerHTML = '';   
};

  





