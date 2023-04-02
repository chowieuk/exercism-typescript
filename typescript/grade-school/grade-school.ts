export class GradeSchool {
    private _roster: Record<number, string[]> = {};

    roster(): Record<number, string[]> {
        const rosterCopy: Record<number, string[]> = {};
        for (const grade in this._roster) {
            rosterCopy[grade] = [...this._roster[grade]];
        }
        return rosterCopy;
    }

    add(name: string, grade: number) {
        for (const grade in this._roster) {
            this._roster[grade] = this._roster[grade].filter(
                (student) => student !== name
            );
        }

        if (this._roster[grade]) {
            this._roster[grade].push(name);
            this._roster[grade].sort();
        } else {
            this._roster[grade] = [name];
        }
    }

    grade(grade: number) {
        return [...(this._roster[grade] ?? [])];
    }
}
