import { convertEng, convertMorse } from "./conversions.js";

export const morseTranslator = (string) => {
    const conEng = convertEng(string);
    const conMor = convertMorse(string);

    let result = "";
    if (string.includes("." || "-")) {
        result = conMor;
    } else {
        result = conEng;
    }

    return result;
};

export default morseTranslator;
