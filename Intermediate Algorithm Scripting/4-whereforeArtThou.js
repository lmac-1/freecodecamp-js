/* -----  Wherefore art thou

Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be present in the object from the collection 
if it is to be included in the returned array.

For example, 

if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 

and the second argument is 
{ last: "Capulet" }, 

then you must return the third object from the array (the first argument), 
because it contains the name and its value, that was passed on as the second argument. */

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line

    arr = collection.filter(object => {
        for (let property in source) {
            
            if (source[property] !== object[property]) {
                return false;
            }
        }
        return true;
    })
    // Only change code above this line
    return arr;
}
// should return [{first: "Tybalt", last: "Capulet"}]
whatIsInAName(
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" });

// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })

// should return []
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});

// better to use hasOwnProperty
