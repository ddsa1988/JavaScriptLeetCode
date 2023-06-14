"use strict";

function isPalindrome(number) {
    if (!Number.isInteger(number)) {
        throw new Error(`Argument must be an integer.`);
    }

    const str = String(number);
    const lastIndex = str.length - 1;
    const halfIndex = Math.trunc(str.length / 2);

    for (let i = 0; i < halfIndex; i++) {
        if (str.charAt(i) !== str.charAt(lastIndex - i)) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(121121121121));
console.log(isPalindrome(321121121122));
