export function classify(input: number): string {
    if (input <= 0) {
        throw new Error("Classification is only possible for natural numbers.");
    }

    if (input === 1) {
        return "deficient";
    }

    const factors = getFactors(input);
    const aliquotSum = factors.reduce((sum, factor) => sum + factor, 0);

    if (aliquotSum === input) {
        return "perfect";
    } else if (aliquotSum > input) {
        return "abundant";
    } else {
        return "deficient";
    }
}

function getFactors(number: number): number[] {
    const factors = [];
    for (let i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            factors.push(i);
            if (i !== number / i && i !== 1) {
                factors.push(number / i);
            }
        }
    }
    return factors;
}
