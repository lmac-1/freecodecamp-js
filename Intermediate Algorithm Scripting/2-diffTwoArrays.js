/* -------- Diff Two Arrays

Compare two arrays and return a new array 
with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order. */

function diffArray(arr1,arr2) {
    // Join the two arrays together
    return arr1.concat(arr2)
            // Apply filter function and check that at least one of the arrays does not include the element
            .filter(element => !arr1.includes(element) || !arr2.includes(element));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);