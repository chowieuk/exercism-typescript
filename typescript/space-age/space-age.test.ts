import { age } from "./space-age.ts";
import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";

describe("Space Age", () => {
  it("age on Earth", () => {
    assertEquals(age("earth", 1000000000), 31.69);
  });

  it("age on Mercury", () => {
    assertEquals(age("mercury", 2134835688), 280.88);
  });

  it("age on Venus", () => {
    assertEquals(age("venus", 189839836), 9.78);
  });

  it("age on Mars", () => {
    assertEquals(age("mars", 2129871239), 35.88);
  });

  it("age on Jupiter", () => {
    assertEquals(age("jupiter", 901876382), 2.41);
  });

  it("age on Saturn", () => {
    assertEquals(age("saturn", 2000000000), 2.15);
  });

  it("age on Uranus", () => {
    assertEquals(age("uranus", 1210123456), 0.46);
  });

  it("age on Neptune", () => {
    assertEquals(age("neptune", 1821023456), 0.35);
  });
});
