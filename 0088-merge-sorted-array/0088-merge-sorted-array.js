/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = 0, j = 0, k = 0;
  let res = [];

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      res[k] = nums1[i];
      i++;
    } else {
      res[k] = nums2[j];
      j++;
    }
    k++;
  }

  while (i < m) {
    res[k] = nums1[i];
    i++;
    k++;
  }

  while (j < n) {
    res[k] = nums2[j];
    j++;
    k++;
  }

  // Copy the merged result back to nums1
  for (let x = 0; x < m + n; x++) {
    nums1[x] = res[x];
  }
};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

