export function parse(phrase: string): string {
    const tokens = phrase.split(/[\s-]+|(?<=[a-z])(?=[A-Z])/);
    let result = "";
    let i = 0;
    while (i < tokens.length) {
        result += tokens[i][0].toUpperCase();
        i++;
    }
    return result;
}
