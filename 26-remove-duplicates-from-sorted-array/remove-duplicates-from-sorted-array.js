/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=1,j=0;i<nums.length;i++,j++){
        if(nums[i]===nums[j]){
            nums.splice(i,1)
            i--;
            j--;
        }
    }
};