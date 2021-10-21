/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities. 

Symbol      Replacement
-----       --------
&           &amp;
<           &lt;
>           &gt;
"           &quot;
'           &apos;
------------------------
*/

// Using match
function convertHTML(str) {
    return str
    .replace(/&|<|>|"|'/g, function(match) {
        switch(match) {
            case("&"):
                return "&amp;";
            case("<"):
                return "&lt;";
            case(">"):
                return "&gt;";
            case('"'):
                return "&quot;"
            case("'"):
                return "&apos;";
    }
    });
}
// Using object
function convertHTML2(str) {
    const pairs = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    }
    return str
    .replace(/&|<|>|"|'/g, match => {
        return pairs[match];
    })
}

convertHTML("Dolce & Gabbana");