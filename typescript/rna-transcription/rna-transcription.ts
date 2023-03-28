export function toRna(input: string): string {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (!DNAtoRNA.has(input.charAt(i))) {
            throw new Error("Invalid input DNA.");
        }
        output += DNAtoRNA.get(input[i]);
    }
    return output;
}

export const DNAtoRNA = new Map<string, string>([
    ["G", "C"],
    ["C", "G"],
    ["T", "A"],
    ["A", "U"],
]);
