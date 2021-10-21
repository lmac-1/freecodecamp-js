/* ---- Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num. */

function sumPrimes(num) {
    // getting rid of invalid data
    if (num <= 0) return 0;

    let sum = 0;
    let potentialPrimeNumber = 1;
    
    while(potentialPrimeNumber <= num) {
        if (isPrime(potentialPrimeNumber)) {
            sum += potentialPrimeNumber;
        }
        potentialPrimeNumber++;
    }
    return sum;
}

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(sumPrimes(977));
