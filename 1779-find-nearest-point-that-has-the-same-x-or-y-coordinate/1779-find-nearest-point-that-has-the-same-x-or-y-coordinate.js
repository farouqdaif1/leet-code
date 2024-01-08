/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {

    let smaller;
     let smallest =[];
   points.forEach((item)=>{
      
       if (item[0]===x||item[1]===y)
         {

let length= Math.abs(item[0]-x)+Math.abs(item[1]-y);
           smallest.push(length);
           smaller = Math.min(...smallest)

}else{
    smallest.push(Infinity)
}
       


   })

console.log(smallest.indexOf(Math.min(...smallest)))

console.log(Math.min(... smallest));



    if(!(Math.min(...smallest)===Infinity)){
return smallest.indexOf(Math.min(...smallest));}
    else{
    return -1
}
};