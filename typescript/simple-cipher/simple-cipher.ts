export class SimpleCipher {
    public key: string;

    private alphabetIndex(char: string): number {
        return char.charCodeAt(0) - 97;
    }

    constructor(key?: string) {
        if (key) {
            this.key = key;
        } else {
            const randomChar = () =>
                String.fromCharCode(Math.floor(Math.random() * 26 + 97));
            const randomString = (length: number) =>
                Array.from({ length }, randomChar).join("");

            this.key = randomString(100);
        }
    }

    encode(plainText: string): string {
        let result: string = "";
        for (let i = 0; i < plainText.length; i++) {
            let charCodeIndex = this.alphabetIndex(plainText[i]);
            let keyIndex = this.alphabetIndex(this.key[i % this.key.length]);
            result += String.fromCharCode(
                ((charCodeIndex + keyIndex) % 26) + 97
            );
        }
        return result;
    }

    decode(cipherText: string): string {
        let result: string = "";
        for (let i = 0; i < cipherText.length; i++) {
            let charCodeIndex = this.alphabetIndex(cipherText[i]);
            let keyIndex = this.alphabetIndex(this.key[i % this.key.length]);
            result += String.fromCharCode(
                ((charCodeIndex - keyIndex + 26) % 26) + 97
            );
        }
        return result;
    }
}
