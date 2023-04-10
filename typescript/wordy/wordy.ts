interface ParsedQuestion {
    numbers: number[];
    operators: string[];
}

function parseQuestion(input: string): ParsedQuestion {
    const mainRegex =
        /^What is (-?\d+)(?:\s+(plus|minus|multiplied by|divided by)\s+(-?\d+))*\?$/;
    const operatorRegex = /\s+(plus|minus|multiplied by|divided by)\s+(-?\d+)/g;
    const numberRegex = /-?\d+/g;

    if (!mainRegex.test(input)) {
        if (
            /(plus|minus|multiplied by|divided by)/.test(input) ||
            input.length < 9
        ) {
            throw new Error("Syntax error 1");
        } else throw new Error("Unknown operation");
    }

    const numbers = input.match(numberRegex);

    if (!numbers) {
        throw new Error("Syntax error 2");
    }

    const numbersParsed = numbers.map((num) => parseInt(num, 10));
    const operatorsParsed = [];
    let match;
    while ((match = operatorRegex.exec(input)) !== null) {
        operatorsParsed.push(match[1]);
    }

    return { numbers: numbersParsed, operators: operatorsParsed };
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
                throw new Error("Syntax error 3");
        }
    }

    return result;
};
