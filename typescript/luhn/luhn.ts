export function valid(digitString: string): boolean {
    if (
        (digitString.match(/\d/g) || []).length <= 1 ||
        digitString.match(/[^\d\s]/)
    ) {
        return false;
    }

    digitString = digitString.replaceAll(" ", "");
    let digitArray = Array.from(digitString, (x) => Number.parseInt(x));

    let total = 0;
    const startIndex = digitArray.length % 2 === 0 ? 0 : 1;

    total = digitArray.reduce((sum, digit, index) => {
        if (index % 2 === startIndex) {
            digit = digit * 2 > 9 ? digit * 2 - 9 : digit * 2;
        }

        return sum + digit;
    }, 0);

    return total % 10 === 0;
}
