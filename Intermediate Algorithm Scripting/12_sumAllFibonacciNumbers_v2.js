/* --- Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 
because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

// Solution from free code camp which is faster, as dynamically creating an array in JS can be slow:
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;

    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }
        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

sumFibs(4); // 5
sumFibs(1); //2
sumFibs(1000); // 1785.
sumFibs(4000000); // 4613732.
sumFibs(4); // 5.
sumFibs(75024); // 60696.
sumFibs(75025); // 135721