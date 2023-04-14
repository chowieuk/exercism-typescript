export const toRoman = (input: number): string => {
    const romanNumerals: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];

    const convertToRoman = (remaining: number, result: string): string => {
        if (remaining === 0) {
            return result;
        }

        for (const [key, value] of romanNumerals) {
            if (remaining >= key) {
                return convertToRoman(remaining - key, result + value);
            }
        }

        return result;
    };

    return convertToRoman(input, "");
};
