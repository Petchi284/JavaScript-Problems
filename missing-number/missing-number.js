/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   let values = nums.length;

    for (let i = 0; i < nums.length; i++) {
        values ^= i ^ nums[i];
    }

    return values;
};