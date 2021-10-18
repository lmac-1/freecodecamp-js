/* ---- Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, 
    move it to the end of the word, and add ay to it.
- If a word begins with a vowel, just add way at the end. */

// My solution
function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(str.toLowerCase()[0])) {
        return str.concat("way");
    } else {
        let startingConsonants = str.match(/^[^aeoiu]+/g)[0];
        return str.slice(startingConsonants.length).concat(startingConsonants).concat("ay");
    }
}

// Alternative solution using regex replace
function translatePigLatin2(str) {
    return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

translatePigLatin("consonant");
translatePigLatin("california"); // aliforniacay
translatePigLatin("paragraphs"); // aragraphspay
translatePigLatin("glove"); //oveglay
translatePigLatin("algorithm"); // algorithmway
translatePigLatin("eight"); // eightway

