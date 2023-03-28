export const colorCode = (input: Color): number => {
    const value = COLORS.indexOf(input);
    if (value === undefined) {
        throw new Error(`Invalid color: ${input}`);
    }
    return value;
};

export type Color = typeof COLORS[number];

export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
