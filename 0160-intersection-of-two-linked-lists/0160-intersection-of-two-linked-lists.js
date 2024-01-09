/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a= headA //pointer walk throw a list first then b
    let b= headB //pointer walk throu b list first then a
    while(a !== b){
        a= (a===null)? headB :a.next;
        b= (b===null)? headA :b.next;
    }
    return a;

};