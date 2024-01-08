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
// itrative solution
var reverseList = function(head) {
    prev =null
    curr=head
    forw=null
    while(curr!==null){
         forw=curr.next
         curr.next=prev
         prev=curr
         curr=forw

    }
    return prev;
};