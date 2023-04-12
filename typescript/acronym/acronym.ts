export function parse(phrase: string): string {
    const tokens = phrase.split(/[\s-]+|(?<=[a-z])(?=[A-Z])/);

    return tokens.map((token) => token[0].toUpperCase()).join("");
}
