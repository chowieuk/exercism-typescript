export function isIsogram(input: string): boolean {
    const seenChars = new Set<string>();

    for (const char of input) {
        if (char === "-" || char === " ") {
            continue;
        }

        const lowerChar = char.toLowerCase();
        if (seenChars.has(lowerChar)) {
            return false;
        }
        seenChars.add(lowerChar);
    }

    return true;
}
