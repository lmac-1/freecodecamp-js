/* Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
    return str
    .split(" ")
    .map(binary => String.fromCharCode(convertBinaryToNumber(binary)))
    .join("");
}

function binaryAgent2(str) {
    return str
    // splits the binary numbers into an array of binary strings
    .split(" ")
    // get the character from the binary number
    // parseInt(binarystring, 2) converts a binary string to an integer
    .map(binary => String.fromCharCode(parseInt(binary,2)))
    .join("");
}

// Not needed in the end, as I can achieve this with parseInt(string, 2)
function convertBinaryToNumber(string) {
    let length = string.length;
    return string
        .split("")
        .reduce((sum, number, index) => {
        return sum += number * Math.pow(2, length-index-1);
        }, 0);
}
convertBinaryToNumber("01000001");

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");