export function count(phrase: string): Map<string, number> {
    const wordCounts = new Map<string, number>();

    let words: string[] =
        phrase.toLowerCase().match(/\b(?:\w+(?:'\w+)?|ok\?)\b/g) || [];

    for (const word of words) {
        if (wordCounts.has(word)) {
            wordCounts.set(word, wordCounts.get(word)! + 1);
        } else {
            wordCounts.set(word, 1);
        }
    }
    return wordCounts;
}
