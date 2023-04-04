export function commands(decimal_input: number): string[] {
    const commands = [
        { value: 1, action: "wink" },
        { value: 2, action: "double blink" },
        { value: 4, action: "close your eyes" },
        { value: 8, action: "jump" },
    ];
    const reverseOrder = 16;

    let result: string[] = [];

    for (const command of commands) {
        if (decimal_input & command.value) {
            result.push(command.action);
        }
    }

    if (decimal_input & reverseOrder) {
        result.reverse();
    }

    return result;
}
