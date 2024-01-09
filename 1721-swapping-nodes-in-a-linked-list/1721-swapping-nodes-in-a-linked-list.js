/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let dummy= new ListNode();
    dummy.next=head
    let first=head
    let secend =head
    for(let i=1;i<k;i++){
        first=first.next;
    }
    let temp=first;
    console.log(temp.val)
    while(first.next){
        first=first.next
        secend=secend.next
    }
    console.log(secend.val)

    let temp_val=temp.val
    temp.val=secend.val
    secend.val=temp_val
    return dummy.next ;
};