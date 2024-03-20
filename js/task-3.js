"use strict";

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", event => {
    const textValue = event.currentTarget.value.trim();

    textOutput.textContent = textValue || "Anonymous";   
});