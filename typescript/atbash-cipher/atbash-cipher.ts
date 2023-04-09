function sanitize(input: string): string {
    return input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
}

function atbashTransposition(char: string): string {
    const charCode = char.charCodeAt(0);

    if (char >= "a" && char <= "z") {
        return String.fromCharCode(
            "a".charCodeAt(0) + ("z".charCodeAt(0) - charCode)
        );
    } else if (char >= "A" && char <= "Z") {
        return String.fromCharCode(
            "A".charCodeAt(0) + ("Z".charCodeAt(0) - charCode)
        );
    } else {
        return char;
    }
}

export function encode(plainText: string, groupSize: number = 5): string {
    const sanitizedText = sanitize(plainText);
    let result = "";

    for (let i = 0; i < sanitizedText.length; i++) {
        const transposedChar = atbashTransposition(sanitizedText[i]);
        result += transposedChar;

        if ((i + 1) % groupSize === 0 && i !== sanitizedText.length - 1) {
            result += " ";
        }
    }

    return result;
}

export function decode(cipherText: string): string {
    const sanitizedText = sanitize(cipherText);
    let result = "";

    for (const char of sanitizedText) {
        result += atbashTransposition(char);
    }

    return result;
}
