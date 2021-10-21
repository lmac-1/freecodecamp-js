/* --- Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let indexOfFirstLetter = alphabet.indexOf(str[0]);
    alphabet = alphabet.slice(indexOfFirstLetter);
    
    for (let i = 0; i < str.length; i++) {
        if (alphabet[i] != str[i]) return alphabet[i];
    }
    return undefined;
}

fearNotLetter("abce");
fearNotLetter("stvwx");