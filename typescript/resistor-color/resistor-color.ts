export const colorCode = (input: Color): number => {
    return COLORS.indexOf(input);
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
