export class Anagram {
    private word: string;
    private freqMap: Record<string, number>;
    constructor(input: string) {
        this.word = input.toLowerCase();
        this.freqMap = this.createFrequencyMap(this.word);
    }

    private createFrequencyMap(str: string): Record<string, number> {
        const frequencyMap: Record<string, number> = {};

        for (const char of str) {
            frequencyMap[char] = (frequencyMap[char] || 0) + 1;
        }

        return frequencyMap;
    }

    private compareFrequencyMaps(
        map1: Record<string, number>,
        map2: Record<string, number>
    ): boolean {
        const keys1 = Object.keys(map1);
        const keys2 = Object.keys(map2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (map1[key] !== map2[key]) {
                return false;
            }
        }

        return true;
    }

    public matches(...potentials: string[]): string[] {
        let matches = [];
        let i = 0;
        while (i < potentials.length) {
            if (potentials[i].toLowerCase() === this.word) {
                i++;
                continue;
            }
            if (
                this.compareFrequencyMaps(
                    this.freqMap,
                    this.createFrequencyMap(potentials[i].toLowerCase())
                )
            ) {
                matches.push(potentials[i]);
            }
            i++;
        }
        return matches;
    }
}
