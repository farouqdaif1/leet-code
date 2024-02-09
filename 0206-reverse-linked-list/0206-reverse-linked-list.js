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
let curr=head
let prev=  null;
while(curr){
    let forw= curr.next
    curr.next=prev
    prev=curr
    curr=forw
}
    return prev

};