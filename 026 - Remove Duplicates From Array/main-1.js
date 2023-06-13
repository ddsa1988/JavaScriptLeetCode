"use strict";

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array.");
    }

    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 8]));
console.log(removeDuplicates([1, 1, 2]));
