/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let result =[];
    for (let i=0;i<operations.length;i++){
    // let x= Number(operations[i]);
    if(operations[i]==="C"){
        result.pop();
    }else if (operations[i]==="D"){
        let length=result.length-1
        let temp=result[length];
        // console.log(temp*2)

        result.push(Number(temp*2))
    }else if (operations[i]==="+"){
        let sum=0 
        for(let z=result.length-1;z>result.length-3;z--){
            sum+=Number(result[z])
        }
        result.push(sum)
    }else{
        result.push(Number(operations[i]))
        }
    }
    let sum=0 
    for(let z=0;z<result.length;z++){
            sum+=Number(result[z])
        }
    return sum;
};