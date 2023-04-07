export function find(haystack: number[], needle: number): number | never {
    let left = 0;

    let right = haystack.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (haystack[mid] === needle) {
            return mid;
        }

        if (haystack[mid] < needle) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    throw new Error("Value not in array");
}
