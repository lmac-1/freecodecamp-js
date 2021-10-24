/* --- Arguments Optional
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. 
*/

// My solution
function addTogether(...args) {
    
    // Deals with invalid data
    if (args.some(element => typeof element != "number")) return undefined;

    // If only one argument provided, return function
    if (args.length == 1) {
        return function(x) {
            return addTogether(args[0], x)
        }
    } 
    // Expected result
    else {
        return args[0] + args[1];
    }
}

// Alternative solution from FreeCodeCamp
function addTogether2() {
    // We can use 'arguments' to get the arguments
    const [first, second] = arguments;

    if (typeof(first) !== "number")
        return undefined;
    if (second === undefined)
        return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
        return undefined;
        
    return first + second;
}

// Test cases
addTogether(2, 3); // 5.

addTogether(23, 30); // 53.

addTogether(5)(7); // 12.

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // undefined.

addTogether(2, "3"); // undefined.

addTogether(2)([3]); // undefined.