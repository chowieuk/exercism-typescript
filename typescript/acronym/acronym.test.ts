import { parse } from "./acronym.ts";
import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/mod.ts";

describe("Acronym are produced from", () => {
    it("title cased phrases", () => {
        expect(parse("Portable Network Graphics")).toEqual("PNG");
    });

    it.ignore("other title cased phrases", () => {
        expect(parse("Ruby on Rails")).toEqual("ROR");
    });

    it.ignore("inconsistently cased phrases", () => {
        expect(parse("HyperText Markup Language")).toEqual("HTML");
    });

    it.ignore("phrases with punctuation", () => {
        expect(parse("First In, First Out")).toEqual("FIFO");
    });

    it.ignore("other phrases with punctuation", () => {
        expect(parse("PHP: Hypertext Preprocessor")).toEqual("PHP");
    });

    it.ignore("phrases with punctuation and sentence casing", () => {
        expect(parse("Complementary metal-oxide semiconductor")).toEqual(
            "CMOS"
        );
    });
});
