interface ParsedQuestion {
    numbers: number[];
    operators: string[];
}

function parseQuestion(input: string): ParsedQuestion {
    const pattern =
        /(?:^What is|(?<=\s))(plus|minus|multiplied by|divided by)?\s+(-?\d+)/g;

    let match;
    const matches: string[] = [];

    while ((match = pattern.exec(input)) !== null) {
        if (match[1]) matches.push(match[1]);
        matches.push(match[2]);
    }

    if (matches.length === 0) {
        throw new Error("Unknown operation");
    }

    const numbers: number[] = [];
    const operators: string[] = [];

    for (let i = 0; i < matches.length; i++) {
        if (i === 0 || i % 2 === 1) {
            if (matches[i]) {
                operators.push(matches[i]);
            }
        } else {
            if (matches[i]) {
                numbers.push(parseInt(matches[i], 10));
            }
        }
    }

    // if (operators.length + 1 !== numbers.length) {
    //     throw new Error("Syntax error");
    // }

    return { numbers, operators };
}

export const answer = (question: string): number => {
    const parsedQuestion = parseQuestion(question);
    const { numbers, operators } = parsedQuestion;

    let result = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];

        switch (operator) {
            case "plus":
                result += nextNumber;
                break;
            case "minus":
                result -= nextNumber;
                break;
            case "multiplied by":
                result *= nextNumber;
                break;
            case "divided by":
                result /= nextNumber;
                break;
            default:
                throw new Error("Syntax Error");
        }
    }

    return result;
};
