export class Matrix {
    constructor(public input: string) {}

    get rows(): number[][] {
        return this.input
            .split("\n")
            .map((x) => x.split(" "))
            .map((x) => x.map((x) => Number(x)));
    }

    get columns(): number[][] {
        let matrix = this.rows;
        let cols: number[][] = [];
        for (let i = 0; i < matrix[0].length; i++) {
            cols[i] = matrix.map((x) => x[i]);
        }
        return cols;
    }
}
