/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let newArr=[]
    for(let i=0;i<nums.length;i++){
       newArr[i]=nums[i];
       newArr[i+nums.length]=nums[i]
    }
    return newArr
};