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
    // The sum of two rational numbers `r₁ = a₁/b₁` and `r₂ = a₂/b₂`
    // is `r₁ + r₂ = a₁/b₁ + a₂/b₂ = (a₁ * b₂ + a₂ * b₁) / (b₁ * b₂)`.

    // const actual = new Rational(1, 2).add(new Rational(-2, 3));
    //         assertRational(actual, -1, 6);
    add(addend: Rational): Rational {
        return new Rational(
            this.numerator * addend.denominator +
                addend.numerator * this.denominator,
            this.denominator * addend.denominator
        );
    }

    // The difference of two rational numbers `r₁ = a₁/b₁` and `r₂ = a₂/b₂`
    // is `r₁ - r₂ = a₁/b₁ - a₂/b₂ = (a₁ * b₂ - a₂ * b₁) / (b₁ * b₂)`.

    sub(subtrahend: Rational): Rational {
        return new Rational(
            this.numerator * subtrahend.denominator -
                this.denominator * subtrahend.numerator,
            this.denominator * subtrahend.denominator
        );
    }

    // The product (multiplication) of two rational numbers `r₁ = a₁/b₁` and `r₂ = a₂/b₂`
    // is `r₁ * r₂ = (a₁ * a₂) / (b₁ * b₂)`.

    mul(factor: Rational): Rational {
        return new Rational(
            this.numerator * factor.numerator,
            this.denominator * factor.denominator
        );
    }
    // Dividing a rational number `r₁ = a₁/b₁` by another `r₂ = a₂/b₂`
    // is `r₁ / r₂ = (a₁ * b₂) / (a₂ * b₁)` if `a₂` is not zero.
    div(divisor: Rational): Rational {
        if (this.denominator === 0) throw new Error("Division by zero");
        return new Rational(
            this.numerator * divisor.denominator,
            this.denominator * divisor.numerator
        );
    }
    // The absolute value `|r|` of the rational number `r = a/b` is equal to `|a|/|b|`.

    abs(): Rational {
        return new Rational(
            Math.abs(this.numerator),
            Math.abs(this.denominator)
        );
    }

    // Exponentiation of a rational number `r = a/b` to a non-negative integer power `n` is `r^n = (a^n)/(b^n)`.

    // Exponentiation of a rational number `r = a/b` to a negative integer power `n` is `r^n = (b^m)/(a^m)`, where `m = |n|`.

    exprational(exponent: number): Rational {
        if (exponent < 0) {
            return new Rational(
                this.denominator ** Math.abs(exponent),
                this.numerator ** Math.abs(exponent)
            );
        } else {
            return new Rational(
                this.numerator ** exponent,
                this.denominator ** exponent
            );
        }
    }

    // Exponentiation of a rational number `r = a/b` to a real (floating-point) number `x` is the quotient `(a^x)/(b^x)`, which is a real number.

    // Exponentiation of a real number `x` to a rational number `r = a/b` is `x^(a/b) = root(x^a, b)`, where `root(p, q)` is the `q`th root of `p`.

    expreal(base: number): number {
        const exponent = this.numerator / this.denominator;
        return base ** exponent;
    }

    // To reduce a rational number r = a/b, divide a and b by the greatest common divisor (gcd) of a and b. So, for example, gcd(12, 8) = 4, so r = 12/8 can be reduced to (12/4)/(8/4) = 3/2. The reduced form of a rational number should be in "standard form" (the denominator should always be a positive integer). If a denominator with a negative integer is present, multiply both numerator and denominator by -1 to ensure standard form is reached. For example, 3/-4 should be reduced to -3/4

    reduce(): Rational {
        if (this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        const GCD: number = this.gcd(
            Math.abs(this.numerator),
            Math.abs(this.denominator)
        );
        this.numerator = this.numerator / GCD;
        this.denominator = this.denominator / GCD;
        return this;
    }
}
