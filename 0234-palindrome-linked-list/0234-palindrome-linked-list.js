/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let reverse=(nodelist)=>{
    let prev=null;
    let curr=nodelist;
    let forw= null;
    while(curr){
        forw=curr.next
        curr.next=prev
        prev=curr
        curr=forw
    }
        return prev
        
    }
    let fast=head
    let slow=head
    while(fast&&fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    slow=reverse(slow)
    while(slow&&(slow.val==head.val)){
        slow=slow.next
        head=head.next
    }
    return slow ===null
    
};