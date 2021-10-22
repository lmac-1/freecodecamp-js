/* ----- Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, 
otherwise, arr should be returned as an empty array. */


function dropElements(arr, func) {
    // We make a copy of the array to ensure we don't change original array
    let array = [...arr];

    while (array.length > 0) {
        if (func(array[0])) {
            return array;
        }
        else {
            array.splice(0,1);
        }
    }
    
    return array;
}

// Test cases
dropElements([1, 2, 3], function(n) {return n < 3; }); // [ 1, 2, 3 ]
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); // [ 3, 4 ]
dropElements([1, 2, 3], function(n) {return n > 0;}); // [ 1, 2, 3 ]
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) // []
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) // [ 7, 4 ]
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) // [ 3, 9, 2 ]