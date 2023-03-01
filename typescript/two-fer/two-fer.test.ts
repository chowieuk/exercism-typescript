import { twoFer } from "./two-fer.ts";
import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/mod.ts";

describe("TwoFer", () => {
  it("no name given", () => {
    const expected = "One for you, one for me.";
    expect(twoFer()).toEqual(expected);
  });

  it("a name given", () => {
    const expected = "One for Alice, one for me.";
    expect(twoFer("Alice")).toEqual(expected);
  });

  it("another name given", () => {
    const expected = "One for Bob, one for me.";
    expect(twoFer("Bob")).toEqual(expected);
  });
});
