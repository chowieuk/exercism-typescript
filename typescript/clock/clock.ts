export class Clock {
    private _hours: number;
    private _minutes: number;
    constructor(hour: number, minute: number = 0) {
        let totalMinutes = hour * 60 + minute;
        totalMinutes %= 24 * 60;

        if (totalMinutes < 0) {
            totalMinutes += 24 * 60;
        }

        this._hours = Math.floor(totalMinutes / 60);
        this._minutes = totalMinutes % 60;
    }

    public toString(): string {
        const formattedHours = this._hours.toString().padStart(2, "0");
        const formattedMinutes = this._minutes.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}`;
    }

    public plus(minutes: number): Clock {
        return new Clock(this._hours, this._minutes + minutes);
    }

    public minus(minutes: number): Clock {
        return new Clock(this._hours, this._minutes - minutes);
    }

    public equals(other: Clock): boolean {
        return this._hours === other._hours && this._minutes === other._minutes;
    }
}
