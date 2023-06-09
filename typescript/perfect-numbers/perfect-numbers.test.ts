import { classify } from "./perfect-numbers.ts";
import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/mod.ts";

describe("Perfect numbers", () => {
    it("Smallest perfect number is classified correctly", () => {
        const expected = "perfect";
        expect(classify(6)).toEqual(expected);
    });

    it("Medium perfect number is classified correctly", () => {
        const expected = "perfect";
        expect(classify(28)).toEqual(expected);
    });

    it("Large perfect number is classified correctly", () => {
        const expected = "perfect";
        expect(classify(33550336)).toEqual(expected);
    });
});

describe("Abundant numbers", () => {
    it("Smallest abundant number is classified correctly", () => {
        const expected = "abundant";
        expect(classify(12)).toEqual(expected);
    });

    it("Medium abundant number is classified correctly", () => {
        const expected = "abundant";
        expect(classify(30)).toEqual(expected);
    });

    it("Large abundant number is classified correctly", () => {
        const expected = "abundant";
        expect(classify(33550335)).toEqual(expected);
    });
});

describe("Deficient numbers", () => {
    it("Smallest prime deficient number is classified correctly", () => {
        const expected = "deficient";
        expect(classify(2)).toEqual(expected);
    });

    it(
        "Smallest non-prime deficient number is classified correctly",
        () => {
            const expected = "deficient";
            expect(classify(4)).toEqual(expected);
        }
    );

    it("Medium deficient number is classified correctly", () => {
        const expected = "deficient";
        expect(classify(32)).toEqual(expected);
    });

    it("Large deficient number is classified correctly", () => {
        const expected = "deficient";
        expect(classify(33550337)).toEqual(expected);
    });

    it(
        "Edge case (no factors other than itself) is classified correctly",
        () => {
            const expected = "deficient";
            expect(classify(1)).toEqual(expected);
        }
    );
});

describe("Invalid inputs", () => {
    it("Zero is rejected (not a natural number)", () => {
        expect(() => {
            classify(0);
        }).toThrow("Classification is only possible for natural numbers.");
    });

    it("Negative integer is rejected (not a natural number)", () => {
        expect(() => {
            classify(-1);
        }).toThrow("Classification is only possible for natural numbers.");
    });
});
