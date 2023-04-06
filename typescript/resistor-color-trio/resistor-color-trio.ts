export enum ResistorValues {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9,
}

type Color = keyof typeof ResistorValues;

export function decodedResistorValue([first, second, third]: Color[]): string {
    var value =
        Number(`${ResistorValues[first]}${ResistorValues[second]}`) *
        10 ** ResistorValues[third];
    if (value >= 1000000000) {
        return `${value / 1000000000} gigaohms`;
    }
    if (value >= 1000000) {
        return `${value / 1000000} megaohms`;
    }
    if (value >= 1000) {
        return `${value / 1000} kiloohms`;
    }
    return `${value} ohms`;
}
