interface OldFormat {
    [key: string]: string[];
}

interface NewFormat {
    [key: string]: number;
}

export function transform(old: OldFormat): NewFormat {
    const result: NewFormat = {};

    for (const pointValue in old) {
        const letters = old[pointValue];

        for (const letter of letters) {
            result[letter.toLowerCase()] = parseInt(pointValue, 10);
        }
    }

    return result;
}
