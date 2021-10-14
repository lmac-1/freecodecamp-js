/* -----  Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object */


// Solution using arguments object (as requested)
function destroyer(arr) {
    const args = Array.from(arguments);
    return args[0].filter(element => !args.slice(1).includes(element));
}

// Alternative solution using spread parameter
function destroyer2(arr, ...args) {
    return arr.filter(element => !args.includes(element));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1,1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1,5,1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]
destroyer([2, 3, 2, 3], 2, 3); // []
destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]