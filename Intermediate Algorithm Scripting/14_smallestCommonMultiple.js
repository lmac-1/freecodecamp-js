/* ---- Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 
that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function isDivisible(divisor) {
    // We pass the every function a 'this' parameter which is equal to i * maximum
    return (this % divisor == 0) ? true : false;
}

function smallestCommons(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let range = [];

    // Create array of numbers that will need to be divisible by result
    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    // The upper bound is the product of all of the numbers in the range array
    const upperBound = range.reduce((product, number) => product * number, 1);
    
    for (let i = 1; i * max <= upperBound; i++) {
        // We pass a 'thisValue' into the every function to allow us to check if the number is divisible
        if (range.every(isDivisible, i * max)) {
        return i*max;
        }
    }
}

// For testing
smallestCommons([1,5]); // 60

smallestCommons([5, 1]); // 60.

smallestCommons([2, 10]); // 2520.

smallestCommons([1, 13]); // 360360.

smallestCommons([23, 18]); // 6056820.