"use strict";

function twoSum(nums, target) {
    const isDataValid =
        Array.isArray(nums) && nums.length > 0 && Number.isInteger(target);

    if (isDataValid) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    } else {
        return [];
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], -6));
console.log(twoSum([3, 3, 0, -3, 5, 8, -3, 3, -1], -6));
