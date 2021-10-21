/* ---- DNA Pairing
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a *2d array*.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

 */

// First solution
function pairElement(str) {
    return str
    .split("")
    .map(x => {
        if (x === "G") return [x, "C"]
        else if (x === "C") return [x, "G"]
        else if (x === "A") return [x, "T"]
        else return [x, "A"];
    });
}

// Second solution
function pairElement2(str) {
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }
    return str
    .split("")
    .map(x => [x, pairs[x]]);
}

pairElement("GCG");