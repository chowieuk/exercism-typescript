interface NucleotideCount {
    A: number;
    C: number;
    G: number;
    T: number;
}

export function nucleotideCounts(dnaSequence: string): NucleotideCount {
    const count: NucleotideCount = { A: 0, C: 0, G: 0, T: 0 };

    for (const nucleotide of dnaSequence) {
        if (!count.hasOwnProperty(nucleotide)) {
            throw new Error("Invalid nucleotide in strand");
        }

        count[nucleotide as keyof NucleotideCount]++;
    }

    return count;
}
