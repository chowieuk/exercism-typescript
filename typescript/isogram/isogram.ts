function createIsogramFrequencyMap(str: string): Record<string, number> {
    const frequencyMap: Record<string, number> = {};

    for (const char of str) {
        if (char !== "-" && char !== " ") {
            const lowerChar = char.toLowerCase();
            frequencyMap[lowerChar] = (frequencyMap[lowerChar] ?? 0) + 1;
        }
    }

    return frequencyMap;
}

function hasRepeatingValues(freqMap: Record<string, number>): boolean {
    for (const key in freqMap) {
        if (freqMap[key] > 1) {
            return true;
        }
    }
    return false;
}

export function isIsogram(input: string): boolean {
    return !hasRepeatingValues(createIsogramFrequencyMap(input));
}
