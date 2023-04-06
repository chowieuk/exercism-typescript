export function find(haystack: number[], needle: number): number | never {
    var mid_index: number;
    var new_haystack: number[];
    haystack.length > 1
        ? (mid_index = Math.floor(haystack.length / 2))
        : (mid_index = 0);
    var candidate = haystack[mid_index];
    console.log(
        `[${haystack}], needle: ${needle}, mid_index: ${mid_index}, candidate: ${candidate}`
    );
    if (candidate === needle) {
        console.log(`${candidate} == ${needle}`);
        return haystack.indexOf(candidate);
    } else if (haystack.length === 1) throw new Error("Value not in array");
    else if (candidate > needle) {
        console.log(`${candidate} > ${needle}`);
        new_haystack = haystack.slice(0, mid_index);
        let result = find(new_haystack, needle);
        if (result === candidate) return haystack.indexOf(candidate);
    } else if (candidate < needle) {
        console.log(`${candidate} < ${needle}`);
        new_haystack = haystack.slice(mid_index);
        let result = find(new_haystack, needle);
        if (result === candidate) return haystack.indexOf(candidate);
    }
    return 0;
}
// The algorithm looks like this:

// Find the middle element of a sorted list and compare it with the item we're looking for.
// If the middle element is our item, then we're done!
// If the middle element is greater than our item, we can eliminate that element and all the elements after it.
// If the middle element is less than our item, we can eliminate that element and all the elements before it.
// If every element of the list has been eliminated then the item is not in the list.
// Otherwise, repeat the process on the part of the list that has not been eliminated.
