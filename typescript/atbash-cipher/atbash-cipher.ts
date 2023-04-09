const transposeMap = new Map<string, string>();

const plain = "abcdefghijklmnopqrstuvwxyz1234567890";
const cipher = "zyxwvutsrqponmlkjihgfedcba1234567890";

for (let i = 0; i < plain.length; i++) {
    transposeMap.set(plain[i], cipher[i]);
}

function sanitize(input: string): string {
    return input.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
}

function performTransposition(
    input: string,
    transpositionMap: Map<string, string>
): string {
    let result = "";
    for (const character of input) {
        const transposedChar = transpositionMap.get(character);
        if (transposedChar) {
            result += transposedChar;
        } else {
            result += character;
        }
    }
    return result;
}

export function encode(plainText: string, groupSize: number = 5): string {
    const sanitizedText = sanitize(plainText);
    const transposedText = performTransposition(sanitizedText, transposeMap);

    let result = "";
    for (let i = 0; i < transposedText.length; i++) {
        result += transposedText[i];
        if ((i + 1) % groupSize === 0 && i !== transposedText.length - 1) {
            result += " ";
        }
    }

    return result;
}

export function decode(cipherText: string): string {
    const sanitizedText = sanitize(cipherText);
    const reverseTransposeMap = new Map(
        Array.from(transposeMap.entries()).map(([k, v]) => [v, k])
    );
    return performTransposition(sanitizedText, reverseTransposeMap);
}
