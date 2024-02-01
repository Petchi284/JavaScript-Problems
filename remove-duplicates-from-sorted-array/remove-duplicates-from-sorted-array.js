/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let indexvalue = 0;
    for(i=1;i<nums.length+1;i++){
        if(nums[i] !== nums[indexvalue]){
            indexvalue++;
            nums[indexvalue] = nums[i]
        }
    }
    return indexvalue;
};