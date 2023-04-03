export class GradeSchool {
    private _roster: Record<number, Set<string>> = {};

    roster(): Record<number, string[]> {
        const rosterCopy: Record<number, string[]> = {};
        for (const grade in this._roster) {
            rosterCopy[grade] = this.grade(Number(grade));
        }
        return rosterCopy;
    }

    add(name: string, grade: number) {
        for (const grade in this._roster) {
            this._roster[grade].delete(name);
        }

        if (this._roster[grade]) {
            this._roster[grade].add(name);
        } else {
            this._roster[grade] = new Set([name]);
        }
    }

    grade(grade: number) {
        return Array.from(this._roster[grade] ?? []).sort();
    }
}
