/*
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * @param {number[]} nums
 * @return {number}
 */

 var pivotIndex = function(nums) {
    //sum the array, then i only have to check the leftSum, as the rightSum will always be totalSum - leftSum - pivot
    //will be comparitively heavy on memory usage
    let total = nums.reduce((acc, val) => acc + val)
    let leftSum = 0
    
    for (i=0; i<nums.length; i++){
        if (leftSum == total - leftSum - nums[i]){ return i } 
        else { leftSum += nums[i] }
    }
    
    return -1
};