import { encode, decode } from "./atbash-cipher.ts";
import { describe, it } from "https://deno.land/std@0.177.0/testing/bdd.ts";
import { expect } from "https://deno.land/x/expect@v0.3.0/mod.ts";

describe("AtbashCipher", () => {
    describe("encoding", () => {
        it("encode yes", () => {
            const cipherText = encode("yes");
            expect(cipherText).toEqual("bvh");
        });

        it.ignore("encode no", () => {
            const cipherText = encode("no");
            expect(cipherText).toEqual("ml");
        });

        it.ignore("encode OMG", () => {
            const cipherText = encode("OMG");
            expect(cipherText).toEqual("lnt");
        });

        it.ignore("encode spaces", () => {
            const cipherText = encode("O M G");
            expect(cipherText).toEqual("lnt");
        });

        it.ignore("encode mindblowingly", () => {
            const cipherText = encode("mindblowingly");
            expect(cipherText).toEqual("nrmwy oldrm tob");
        });

        it.ignore("encode numbers", () => {
            const cipherText = encode("Testing,1 2 3, testing.");
            expect(cipherText).toEqual("gvhgr mt123 gvhgr mt");
        });

        it.ignore("encode deep thought", () => {
            const cipherText = encode("Truth is fiction.");
            expect(cipherText).toEqual("gifgs rhurx grlm");
        });

        it.ignore("encode all the letters", () => {
            const cipherText = encode("thequickbrownfoxjumpsoverthelazydog");
            expect(cipherText).toEqual(
                "gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"
            );
        });
    });

    describe("decode", () => {
        it.ignore("decode exercism", () => {
            const plainText = decode("vcvix rhn");
            expect(plainText).toEqual("exercism");
        });

        it.ignore("decode a sentence", () => {
            const cipherText = decode("zmlyh gzxov rhlug vmzhg vkkrm thglm v");
            expect(cipherText).toEqual("anobstacleisoftenasteppingstone");
        });

        it.ignore("decode numbers", () => {
            const plainText = decode("gvhgr mt123 gvhgr mt");
            expect(plainText).toEqual("testing123testing");
        });

        it.ignore("decode all the letters", () => {
            const cipherText = decode(
                "gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"
            );
            expect(cipherText).toEqual("thequickbrownfoxjumpsoverthelazydog");
        });
    });
});
