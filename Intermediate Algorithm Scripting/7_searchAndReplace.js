/* ---- Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence:
1. First argument is the sentence to perform the search and replace on.
2. Second argument is the word that you will be replacing (before).
3. Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word Book with the word dog, it should be replaced as Dog 
*/

// First solution
function myReplace(str, before, after) {
    const replacement = (before[0] === before[0].toUpperCase())
                        // Make first character uppercase
                        ? after[0].toUpperCase().concat(after.slice(1))
                        // Make first character lowercase
                        : after[0].toLowerCase().concat(after.slice(1));
    //const regex = new RegExp(`${before}`, "g");
    return str.replace(before, replacement);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")