export const engMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ",": "--..--",
    "?": "..--..",
    ";": "-.-.-.",
    ":": "---...",
    "/": "-..-.",
    "'": ".----.",
    '"': ".-..-.",
};

// Reversing the object to a second object
export const morseEng = () => {
    let keys = Object.keys(engMorse);
    let values = Object.values(engMorse);
    let morseEng = {};

    for (let i = 0; i < keys.length; i++) {
        morseEng[values[i]] = keys[i];
    }

    return morseEng;
};
