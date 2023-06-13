"use strict";

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array.");
    }
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (newArr.includes(arr[i])) {
            continue;
        }

        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 8]));
console.log(removeDuplicates([1, 1, 2]));
