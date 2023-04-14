export class Squares {
    private count: number;
    constructor(count: number) {
        this.count = count;
    }

    get sumOfSquares(): number {
        // [n(n + 1)(2n + 1)] / 6
        return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
    }

    get squareOfSum(): number {
        // (n(n+1) / 2) ^ 2
        return ((this.count * (this.count + 1)) / 2) ** 2;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}
