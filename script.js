import morseTranslator from "./modules/translator.js";

// declaring input and output to make life easier
const input = document.querySelector("#english-text");
const output = document.querySelector("#morse-text");

input.addEventListener("input", (event) => {
    const stringInput = event.target.value;

    output.innerHTML = morseTranslator(stringInput);

    // Clearing output
    if (stringInput === "") {
        output.innerHTML = "";
    }
});
