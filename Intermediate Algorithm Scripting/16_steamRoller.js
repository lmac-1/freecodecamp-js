/* Steamroller

Flatten a nested array. You must account for varying levels of nesting. 

!! You must not use the flat method in your solution !!
*/

function steamrollArray(arr) {
    let newArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        // Checks if the element is an array or not
        if (Array.isArray(arr[i])) {
            // We use the spread operator to make a recursive solution
            newArray.push(...steamrollArray(arr[i]))
        }
        else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// Test cases

steamrollArray([[["a"]], [["b"]]]); // ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4].