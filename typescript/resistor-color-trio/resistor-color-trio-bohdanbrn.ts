const colorCodes = new Map([
    ["black", 0],
    ["brown", 1],
    ["red", 2],
    ["orange", 3],
    ["yellow", 4],
    ["green", 5],
    ["blue", 6],
    ["violet", 7],
    ["grey", 8],
    ["white", 9],
]);

const measurementUnits = new Map([
    [1, "kilo"],
    [2, "mega"],
    [3, "giga"],
]);

export function decodedResistorValue([
    color1,
    color2,
    color3,
]: string[]): string {
    const color1Index = colorCodes.get(color1) ?? 0;
    const color2Index = colorCodes.get(color2) ?? 0;
    let zeroCount = colorCodes.get(color3) ?? 0;

    const omhValue = (
        (color1Index * 10 + color2Index) *
        Math.pow(10, zeroCount)
    ).toString();

    const measurementNumber = Math.floor((omhValue.length - 1) / 3);
    const measurementType = measurementUnits.get(measurementNumber) ?? "";
    const displayOmhValue = omhValue.substring(
        0,
        omhValue.length - measurementNumber * 3
    );

    return `${displayOmhValue} ${measurementType}ohms`;
}
