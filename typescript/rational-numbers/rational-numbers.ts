export class Rational {
    constructor(public numerator: number, public denominator: number) {
        this.reduce();
    }

    private gcd(a: number, b: number): number {
        while (b !== 0) {
            const temp: number = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    add(addend: Rational): Rational {
        return new Rational(
            this.numerator * addend.denominator +
                addend.numerator * this.denominator,
            this.denominator * addend.denominator
        );
    }

    sub(subtrahend: Rational): Rational {
        return new Rational(
            this.numerator * subtrahend.denominator -
                this.denominator * subtrahend.numerator,
            this.denominator * subtrahend.denominator
        );
    }

    mul(factor: Rational): Rational {
        return new Rational(
            this.numerator * factor.numerator,
            this.denominator * factor.denominator
        );
    }

    div(divisor: Rational): Rational {
        if (this.denominator === 0) throw new Error("Division by zero");
        return new Rational(
            this.numerator * divisor.denominator,
            this.denominator * divisor.numerator
        );
    }

    abs(): Rational {
        return new Rational(
            Math.abs(this.numerator),
            Math.abs(this.denominator)
        );
    }

    exprational(exponent: number): Rational {
        let currentExponent = Math.abs(exponent);
        let [currentNumerator, currentDenominator] =
            exponent < 0
                ? [this.denominator, this.numerator]
                : [this.numerator, this.denominator];
        return new Rational(
            currentNumerator ** currentExponent,
            currentDenominator ** currentExponent
        );
    }

    expreal(base: number): number {
        if (this.denominator === 0) throw new Error("Division by zero");
        const exponent = this.numerator / this.denominator;
        return base ** exponent;
    }

    reduce(): Rational {
        if (this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        const GCD: number = this.gcd(
            Math.abs(this.numerator),
            this.denominator
        );
        this.numerator = this.numerator / GCD;
        this.denominator = this.denominator / GCD;
        return this;
    }
}
