const transpose = {
    plain: "abcdefghijklmnopqrstuvwxyz1234567890",
    cipher: "zyxwvutsrqponmlkjihgfedcba1234567890",
};

export function encode(plainText: string, groupSize: number = 5): string {
    const sanitzedText = plainText.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let result = "";
    let counter = 0;
    for (const character of sanitzedText) {
        const index = transpose.plain.indexOf(character);
        result += transpose.cipher[index];

        counter++;
        if (counter % groupSize === 0 && counter !== sanitzedText.length) {
            result += " ";
        }
    }
    return result;
}

export function decode(cipherText: string): string {
    const sanitzedText = cipherText.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let result = "";
    for (const character of sanitzedText) {
        const index = transpose.cipher.indexOf(character);
        result += transpose.plain[index];
    }
    return result;
}
