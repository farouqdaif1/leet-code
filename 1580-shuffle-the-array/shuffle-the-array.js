/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr=[]
    for(let i=0,j=n;i<n,j<n*2;i++,j++){
        newArr.push(nums[i])
        newArr.push(nums[j])
    }
    return newArr;
};