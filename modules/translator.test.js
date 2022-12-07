import morseTranslator from "./translator.js";

describe("morseTranslator()", () => {
    it("Should convert english to morse", () => {
        expect(morseTranslator("Hello")).toBe(".... . .-.. .-.. ---");
        expect(morseTranslator("Hello how are you today")).toBe(
            ".... . .-.. .-.. ---   .... --- .--   .- .-. .   -.-- --- ..-   - --- -.. .- -.--"
        );

        expect(morseTranslator("Testing Testing")).toBe(
            "- . ... - .. -. --.   - . ... - .. -. --."
        );

        expect(morseTranslator("Sphinx of black quartz, judge my vow")).toBe(
            "... .--. .... .. -. -..-   --- ..-.   -... .-.. .- -.-. -.-   --.- ..- .- .-. - --.. --..--   .--- ..- -.. --. .   -- -.--   ...- --- .--"
        );

        expect(
            morseTranslator("Sphinx of black quartz, judge my vow?;:/")
        ).toBe(
            "... .--. .... .. -. -..-   --- ..-.   -... .-.. .- -.-. -.-   --.- ..- .- .-. - --.. --..--   .--- ..- -.. --. .   -- -.--   ...- --- .-- ..--.. -.-.-. ---... -..-."
        );

        expect(
            morseTranslator("1 is 2 is 3 is 4 is 5 is 6 is 7 is 8 is 9 is 0")
        ).toBe(
            ".----   .. ...   ..---   .. ...   ...--   .. ...   ....-   .. ...   .....   .. ...   -....   .. ...   --...   .. ...   ---..   .. ...   ----.   .. ...   -----"
        );
    });

    describe("morseTranslator()", () => {
        it("Should convert morse to english", () => {
            expect(morseTranslator(".... . .-.. .-.. ---")).toBe("HELLO");
            expect(
                morseTranslator(
                    ".... . .-.. .-.. ---   .... --- .--   .- .-. .   -.-- --- ..-   - --- -.. .- -.--"
                )
            ).toBe("HELLO HOW ARE YOU TODAY");

            expect(
                morseTranslator("- . ... - .. -. --.   - . ... - .. -. --.")
            ).toBe("TESTING TESTING");

            expect(
                morseTranslator(
                    "... .--. .... .. -. -..-   --- ..-.   -... .-.. .- -.-. -.-   --.- ..- .- .-. - --.. --..--   .--- ..- -.. --. .   -- -.--   ...- --- .--"
                )
            ).toBe("SPHINX OF BLACK QUARTZ, JUDGE MY VOW");

            expect(
                morseTranslator(
                    "... .--. .... .. -. -..-   --- ..-.   -... .-.. .- -.-. -.-   --.- ..- .- .-. - --.. --..--   .--- ..- -.. --. .   -- -.--   ...- --- .-- ..--.. -.-.-. ---... -..-."
                )
            ).toBe("SPHINX OF BLACK QUARTZ, JUDGE MY VOW?;:/");

            expect(
                morseTranslator(
                    ".----   .. ...   ..---   .. ...   ...--   .. ...   ....-   .. ...   .....   .. ...   -....   .. ...   --...   .. ...   ---..   .. ...   ----.   .. ...   -----"
                )
            ).toBe("1 IS 2 IS 3 IS 4 IS 5 IS 6 IS 7 IS 8 IS 9 IS 0");
        });
    });
});
