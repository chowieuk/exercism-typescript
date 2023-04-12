type Codon =
    | "AUG"
    | "UUU"
    | "UUC"
    | "UUA"
    | "UUG"
    | "UCU"
    | "UCC"
    | "UCA"
    | "UCG"
    | "UAU"
    | "UAC"
    | "UGU"
    | "UGC"
    | "UGG"
    | "UAA"
    | "UAG"
    | "UGA";

type AminoAcid =
    | "Methionine"
    | "Phenylalanine"
    | "Leucine"
    | "Serine"
    | "Tyrosine"
    | "Cysteine"
    | "Tryptophan"
    | null;

const CODON_MAP: Record<Codon, AminoAcid> = {
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
};

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
