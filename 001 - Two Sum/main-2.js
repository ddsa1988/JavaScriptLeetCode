"use strict";

function twoSum(nums, target) {
    const map = new Map();
    const isDataValid =
        Array.isArray(nums) && nums.length > 0 && Number.isInteger(target);

    if (isDataValid) {
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (map.has(diff)) {
                return [map.get(diff), i];
            } else {
                map.set(nums[i], i);
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
