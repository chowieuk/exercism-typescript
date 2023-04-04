export function commands(decimal_input: number): string[] {
    const commands = [
        { value: 1, action: "wink" },
        { value: 2, action: "double blink" },
        { value: 4, action: "close your eyes" },
        { value: 8, action: "jump" },
    ];
    let binarySequence = decimal_input.toString(2);
    let result: string[] = [];

    for (let i = binarySequence.length - 1, j = 0; i >= 0; i--, j++) {
        if (binarySequence[i] === "1") {
            if (j < commands.length) {
                result.push(commands[j].action);
            } else {
                result.reverse();
            }
        }
    }

    return result;
}
