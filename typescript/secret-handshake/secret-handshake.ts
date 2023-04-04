export function commands(decimal: number): string[] {
    const commands = [
        { value: 1, action: "wink" },
        { value: 2, action: "double blink" },
        { value: 4, action: "close your eyes" },
        { value: 8, action: "jump" },
    ];
    const reverseOrder = 16;

    let result: string[] = [];

    for (const command of commands) {
        if (decimal & command.value) {
            result.push(command.action);
        }
    }

    if (decimal & reverseOrder) {
        result.reverse();
    }

    return result;
}
