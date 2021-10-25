/* --- Roman Numeral Converter ---
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {

    if (typeof num != "number" || typeof parseInt(num) != "number") return undefined;

    if (num >= 4000) return "Please enter a number less than 3999";

    const lookup = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI",
        7: "VII", 8: "VIII", 9: "IX", 10: "X", 
        20: "XX", 30: "XXX", 40: "XL", 50: "L", 60: "LX",
        70: "LXX", 80: "LXXX", 90: "XC", 100: "C", 
        200: "CC", 300: "CCC", 400: "CD", 500: "D",
        600: "DC", 700: "DCC", 800: "DCCC", 900: "CM", 1000: "M", 2000: "MM", 3000: "MMM"
    }

    return String(num)
    .split("")
    .reduce((string, element, index, array) => {
        let unit = Math.pow(10, array.length - index - 1);
        if (element * unit > 0) {
            return string.concat(lookup[element * unit]);;
        } else {
            return string;
        }
    }, "")

}

convertToRoman(2); // II
convertToRoman(3); // III
convertToRoman(4); // IV
convertToRoman(5); // V
convertToRoman(9); // IX
convertToRoman(12); // XII
convertToRoman(16); // XVI
convertToRoman(29); // XXIX
convertToRoman(44); // XLIV
convertToRoman(45); // XLV
convertToRoman(68); // LXVIII
convertToRoman(83); // LXXXIII
convertToRoman(97); // XCVII
convertToRoman(99); // XCIX
convertToRoman(400); // CD
convertToRoman(500); // D
convertToRoman(501); // DI
convertToRoman(649); // DCXLIX
convertToRoman(798); // DCCXCVIII
convertToRoman(891); // DCCCXCI
convertToRoman(1000); // M
convertToRoman(1004); // MIV
convertToRoman(1006); // MVI
convertToRoman(1023); // MXXIII
convertToRoman(2014); // MMXIV
convertToRoman(3999); // MMMCMXCIX