interface ParsedQuestion {
    numbers: number[];
    operators: Operator[];
}

type Operator = "plus" | "minus" | "multiplied" | "divided";

function isOperator(token: string): token is Operator {
    return ["plus", "minus", "multiplied", "divided"].includes(token);
}

function parseQuestion(input: string): ParsedQuestion {
    if (input[input.length - 1] == "?" && input.slice(0, 7) == "What is") {
        input = input.slice(8, input.length - 1);
    } else throw new Error("Unknown operation");

    const tokens = input.replaceAll(" by", "").split(" ");

    if (isNaN(parseInt(tokens[0])) || tokens.length < 1) {
        throw new Error("Syntax error");
    }

    let numbers: number[] = [];
    let operators: Operator[] = [];

    numbers.push(parseInt(tokens[0]));

    let i = 1;
    while (i < tokens.length) {
        const operator = tokens[i];
        const number = tokens[i + 1];

        if (!isOperator(operator)) {
            if (isNaN(parseInt(operator))) {
                throw new Error("Unknown operation");
            } else throw new Error("Syntax error");
        }

        if (isNaN(parseInt(number))) {
            throw new Error("Syntax error");
        }

        operators.push(operator);
        numbers.push(parseInt(number));
        i += 2;
    }

    if (numbers.length != operators.length + 1) throw new Error("Syntax error");

    return { numbers: numbers, operators: operators };
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
            case "multiplied":
                result *= nextNumber;
                break;
            case "divided":
                result /= nextNumber;
                break;
            default:
                throw new Error("Syntax error");
        }
    }

    return result;
};
