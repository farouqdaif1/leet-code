/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let result =[...nums] 
    for(let i=0;i<nums.length;i++){
        result.push(nums[i])
    }
    // console.log(result);
    return result;
};