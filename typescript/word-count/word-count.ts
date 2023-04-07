export function count(phrase: string): Map<string, number> {
    const sanitizedPhrase = phrase
        .toLowerCase()
        .replace(/\B'|'\B|(^')|('$)/g, " ")
        .replace(/[^a-z0-9'?\s]+/g, " ");

    const words = sanitizedPhrase
        .split(/\s+/)
        .filter((word) => word.length > 0);

    const wordCounts = new Map<string, number>();

    for (const word of words) {
        if (wordCounts.has(word)) {
            wordCounts.set(word, wordCounts.get(word)! + 1);
        } else {
            wordCounts.set(word, 1);
        }
    }
    return wordCounts;
}
