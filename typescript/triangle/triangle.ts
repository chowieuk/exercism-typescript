export class Triangle {
    private a: number;
    private b: number;
    private c: number;
    private isTriangle = false;

    constructor(...sides: number[]) {
        [this.a, this.b, this.c] = sides;

        this.a + this.b >= this.c &&
        this.b + this.c >= this.a &&
        this.a + this.c >= this.b &&
        this.a > 0 &&
        this.b > 0 &&
        this.c > 0
            ? (this.isTriangle = true)
            : (this.isTriangle = false);
    }

    get isEquilateral(): boolean {
        return this.isTriangle && this.a === this.b && this.b === this.c;
    }

    get isIsosceles(): boolean {
        return (
            this.isTriangle &&
            (this.a === this.b || this.b === this.c || this.c === this.a)
        );
    }

    get isScalene() {
        return (
            this.isTriangle &&
            this.a != this.b &&
            this.b != this.c &&
            this.a != this.c
        );
    }
}
