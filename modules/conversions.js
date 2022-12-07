import { engMorse, morseEng } from "./objects.js";

// Converting from English to Morse
export const convertEng = (str) => {
    return str
        .toUpperCase()
        .split("")
        .map((element) => {
            return engMorse[element] ? engMorse[element] : element;
        })
        .join(" ");
};

// Converting from Morse to English
export const convertMorse = (str) => {
    return str
        .split("   ")
        .map((element) =>
            element
                .split(" ")
                .map((element) => morseEng()[element])
                .join("")
        )
        .join(" ");
};
