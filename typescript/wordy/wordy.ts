interface ParsedQuestion {
    numbers: number[];
    operators: Operator[];
}

type Operator = "plus" | "minus" | "multiplied" | "divided";

function isOperator(token: string): token is Operator {
    return ["plus", "minus", "multiplied", "divided"].includes(token);
}

function parseQuestion(input: string): ParsedQuestion {
    const tokens = input.replaceAll(" by", "").replace("?", " ?").split(" ");
    if (tokens.length < 4) throw new Error("Syntax error");
    if (
        tokens[0] != "What" ||
        tokens[1] != "is" ||
        tokens[tokens.length - 1] != "?"
    ) {
        throw new Error("Unknown operation");
    }

    var numbers: number[] = [];
    var operators: Operator[] = [];

    for (let i = 2; i < tokens.length - 1; i++) {
        if (i % 2 === 0) {
            if (isNaN(parseInt(tokens[i]))) {
                throw new Error("Syntax error");
            } else numbers.push(parseInt(tokens[i]));
        } else if (isOperator(tokens[i])) {
            operators.push(tokens[i] as Operator);
        } else {
            if (isNaN(parseInt(tokens[i], 10))) {
                throw new Error("Unknown operation");
            } else throw new Error("Syntax error");
        }
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
