/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    return str
    .split(/\W|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
}

// Alternative solution with regex
function spinalCaseRegEx(str) {
    return str
    // Put spaces in front of capital letters
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // split on space, dash and underscore
    .split(/\s|-|_/)
    // join with dashes
    .join("-")
    // change to lowercase
    .toLowerCase()
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");

