function createCodonMap<T extends string, U extends string | null>(
    codonMap: Record<T, U>
): Record<T, U> {
    return codonMap;
}

const CODON_MAP = createCodonMap({
    AUG: "Methionine",
    UUU: "Phenylalanine",
    UUC: "Phenylalanine",
    UUA: "Leucine",
    UUG: "Leucine",
    UCU: "Serine",
    UCC: "Serine",
    UCA: "Serine",
    UCG: "Serine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
    UGU: "Cysteine",
    UGC: "Cysteine",
    UGG: "Tryptophan",
    UAA: null,
    UAG: null,
    UGA: null,
});

type Codon = keyof typeof CODON_MAP;
type AminoAcid = typeof CODON_MAP[Codon];

export function translate(rna: string): AminoAcid[] {
    const codons: Codon[] = (rna.match(/.{1,3}/g) || []).map(
        (codon) => codon as Codon
    );

    const proteins: AminoAcid[] = [];

    for (const codon of codons) {
        const aminoAcid = CODON_MAP[codon];

        if (aminoAcid === undefined) {
            throw new Error("Invalid codon");
        }

        if (aminoAcid === null) {
            break;
        }

        proteins.push(aminoAcid);
    }

    return proteins;
}
