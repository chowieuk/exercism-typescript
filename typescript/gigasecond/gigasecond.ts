export class Gigasecond {
    private initialDate: Date;

    constructor(initialDate: Date) {
        this.initialDate = initialDate;
    }

    public date(): Date {
        const gigasecondInMilliseconds = 1e9 * 1000;

        const newDate = new Date(
            this.initialDate.getTime() + gigasecondInMilliseconds
        );

        return newDate;
    }
}
