const keyColorsNumbers: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
};

export function decodedResistorValue(colors: string[]): string {
    const [firstColor, secondColor, thirdColor, fourColor = null] = colors;

    let ohms =
        keyColorsNumbers[firstColor.toLowerCase()] > 0
            ? `${keyColorsNumbers[firstColor.toLowerCase()]}`
            : "";

    const secondNumber = keyColorsNumbers[secondColor.toLowerCase()];
    const thirdNumber = keyColorsNumbers[thirdColor.toLowerCase()];
    let fourNumber = fourColor ? keyColorsNumbers[fourColor.toLowerCase()] : 0;

    let dozens = Math.floor((thirdNumber + fourNumber) / 3) * 3;
    let ceros = thirdNumber + fourNumber - dozens;

    if (secondNumber > 0) {
        ohms += secondNumber;
    } else {
        dozens = Math.floor((thirdNumber + fourNumber + 1) / 3) * 3;
        ceros = thirdNumber + fourNumber + 1 - dozens;
    }

    ohms += "0".repeat(ceros);

    if (dozens === 9) {
        ohms += " gigaohms";
    } else if (dozens === 6 && fourNumber != 3) {
        ohms += " megaohms";
    } else if (dozens === 3 || fourNumber === 3) {
        ohms += " kiloohms";
    } else {
        ohms += " ohms";
    }

    return ohms;
}
