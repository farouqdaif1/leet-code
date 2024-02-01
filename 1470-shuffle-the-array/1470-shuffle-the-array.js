/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let x1=nums.slice(0,n)
    let x2=nums.slice(n,nums.length)
    let result =[]
    for (let i=0;i<n;i++){
        result.push(x1[i]);
        result.push(x2[i]);
    }
   return result
};