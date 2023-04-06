enum ResistorValues {
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

const measurementUnits: Record<number, string> = {
    1: "kilo",
    2: "mega",
    3: "giga",
} as const;

type colorTypes = keyof typeof ResistorValues;

export function decodedResistorValue([
    color1,
    color2,
    color3,
]: colorTypes[]): string {
    const color1Index = ResistorValues[color1] ?? 0;
    const color2Index = ResistorValues[color2] ?? 0;

    let zeroCount = ResistorValues[color3] ?? 0;
    const omhValue = (
        (color1Index * 10 + color2Index) *
        Math.pow(10, zeroCount)
    ).toString();
    const measurementNumber = Math.floor((omhValue.length - 1) / 3);
    const measurementType = measurementUnits[measurementNumber] ?? "";
    const displayOmhValue = omhValue.substring(
        0,
        omhValue.length - measurementNumber * 3
    );

    return `${displayOmhValue} ${measurementType}ohms`;
}
