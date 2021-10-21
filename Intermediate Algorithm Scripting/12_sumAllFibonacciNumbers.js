/* --- Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. 
Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 
because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

function sumFibs(num) {
    // checks for valid input
    if (num <= 0) return 0;
    
    let arrayOfOddFibonacciNumbers = [];
    for (let i = 1; fibonacci(i) <= num; i++) {
        if (fibonacci(i) % 2 == 1) {
            arrayOfOddFibonacciNumbers.push(fibonacci(i));
        }
    }
    return arrayOfOddFibonacciNumbers
        .reduce((sum, number) => sum += number, 0);
}

// Function using recursion to find fibonacci numbers
function fibonacci(num) {
    if (num == 0 || num == undefined) {
        return 0;
    }
    else if (num == 1) {
        return 1;
    }
    else if (num == 2) {
        return 1;
    }
    else {
        return fibonacci(num-2) + fibonacci(num-1);
    }
}

sumFibs(4); // 5
sumFibs(1); //2
sumFibs(1000); // 1785.
sumFibs(4000000); // 4613732.
sumFibs(4); // 5.
sumFibs(75024); // 60696.
sumFibs(75025); // 135721