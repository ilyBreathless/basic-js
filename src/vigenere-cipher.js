class VigenereCipheringMachine {
  constructor(isDirect = false) {
        this.isDirect = isDirect;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
  encrypt(str, key) {
        str = str.toUpperCase()
        key = key.toUpperCase()
        let res = ''
        let keyIndex = 0
        for (let i = 0; i < str.length; i++) {
            const letter = str[i]
             if (!letter.match("[A-Z]")) {
                res += letter
                continue;
            }

            if (keyIndex > key.length - 1) {
                keyIndex = 0
            }
            const cipherLetter = key[keyIndex]
            const cipherIndex = this.alphabet.indexOf(cipherLetter)
            const cipherStr = this.alphabet.slice(cipherIndex) + this.alphabet.slice(0, cipherIndex)
            const letterIndex = this.alphabet.indexOf(letter)
            const encryptedLetter = cipherStr[letterIndex]
            res += encryptedLetter
            keyIndex++
        }
        return this.isDirect ? res.split('').reverse().join('') : res;
  }    
  decrypt(str, key) {
        str = str.toUpperCase()
        key = key.toUpperCase()
        let res = ''
        let keyIndex = 0
        for (let i = 0; i < str.length; i++) {
            const letter = str[i]
            if (!letter.match("[A-Z]")) {
                res += letter
                continue;
            }
            if (keyIndex > key.length - 1) {
                keyIndex = 0;
            }
            const cipherLetter = key[keyIndex];
            const cipherIndex = this.alphabet.indexOf(cipherLetter)
            const cipherStr = this.alphabet.slice(cipherIndex) + this.alphabet.slice(0, cipherIndex)
            const letterIndex = cipherStr.indexOf(letter)
            const decryptedLetter = this.alphabet[letterIndex]
            res += decryptedLetter
            keyIndex++
  }
    return this.isDirect ? res.split('').reverse().join('') : res
 }
}
module.exports = VigenereCipheringMachine;


