function randomUpper(): string {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

export class Robot {
    private static names: Set<string> = new Set();
    private _name: string;

    constructor() {
        this._name = this.generateUniqueName();
        Robot.names.add(this._name);
    }

    private generateUniqueName(): string {
        let name: string;
        do {
            name =
                randomUpper() +
                randomUpper() +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10) +
                Math.floor(Math.random() * 10);
        } while (Robot.names.has(name));
        return name;
    }

    public get name(): string {
        return this._name;
    }

    public resetName(): void {
        const newName = this.generateUniqueName();
        Robot.names.add(newName);
        // Robot.names.delete(this._name);
        this._name = newName;
    }

    public static releaseNames(): void {
        Robot.names = new Set();
    }
}
