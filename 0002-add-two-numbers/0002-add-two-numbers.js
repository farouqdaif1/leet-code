/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let curr1=l1
    let curr2=l2
    let result =new ListNode();
    let curR=result
    let temp=0;
    while(curr1||curr2){
        let deg1=(curr1)?curr1.val:0
        let deg2=(curr2)?curr2.val:0
        let res =deg1+deg2+temp
        if(res>9){
            let sRes=res.toString()
            result.next=new ListNode(parseInt(sRes[1]))
            temp=parseInt(sRes[0]);
        }else{
            result.next=new ListNode(res)
            temp=0
        }
      (curr1)?curr1=curr1.next:null;
      (curr2)?curr2=curr2.next:null;
      result=result.next
    } 
    curR.val=null
    if(temp){
        result.next=new ListNode(temp)
    }
   // console.log(temp);
   return(curR.next);

};