import { toRna } from "./rna-transcription.ts";
import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/mod.ts";

describe("Transcriptor", () => {
  it("transcribes cytosine to guanine", () => {
    expect(toRna("C")).toEqual("G");
  });

  it("transcribes guanine to cytosine", () => {
    expect(toRna("G")).toEqual("C");
  });

  it("transcribes adenine to uracil", () => {
    expect(toRna("A")).toEqual("U");
  });

  it("transcribes thymine to adenine", () => {
    expect(toRna("T")).toEqual("A");
  });

  it("transcribes all dna nucleotides to their rna complements", () => {
    expect(toRna("ACGTGGTCTTAA")).toEqual("UGCACCAGAAUU");
  });

  it("correctly handles invalid input", () => {
    expect(() => toRna("U")).toThrowError("Invalid input DNA.");
  });

  it("correctly handles completely invalid input", () => {
    expect(() => toRna("XXX")).toThrowError("Invalid input DNA.");
  });

  it("correctly handles partially invalid input", () => {
    expect(() => toRna("ACGTXXXCTTAA")).toThrowError("Invalid input DNA.");
  });
});
