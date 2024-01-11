/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head ||!head.next ){
        return head
    }
    let odd=head
    let even=head.next
    let evenNode=head.next
    let flag=true
    let i=head.next.next
    while(i){
        if(flag){
          odd.next=odd.next.next
          odd=odd.next
        }else{
          even.next=even.next.next
          even=even.next
        }
        flag=!flag
        i=i.next
    }

    odd.next = evenNode    
    even.next=null
    return head
};