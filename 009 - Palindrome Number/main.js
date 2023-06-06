"use strict";

function isPalindrome(number) {
    if (!Number.isInteger(number)) {
        throw new Error(`Argument must be an integer.`);
    }

    return String(number) === String(number).split("").reverse().join("");
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
