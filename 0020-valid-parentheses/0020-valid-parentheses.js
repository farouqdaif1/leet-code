/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let checklist=[];
    for(let i=0;i<s.length;i++){
       if("("===s[i]||"["===s[i]||"{"===s[i]){
           checklist.push(s[i])
       }else{
           
           if (
               (checklist[checklist.length-1]==="["&&(s[i]==="]"))||
               (checklist[checklist.length-1]==="("&&(s[i]===")")) ||
               (checklist[checklist.length-1]==="{"&&(s[i]==="}")))
              {
                  checklist.pop(); 
              }else{
                  return false
              }
       } 
    }
    
    console.log(checklist)
    return !checklist.length
};