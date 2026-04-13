/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
    let p1 = head;
    let p2 = head;
    let counter = 0;
    while(counter < n) {
        p2 = p2.next;
        counter++;
    }
    let prev = null;
    while(p2) {
        prev = p1;
        p1 = p1.next;
        p2 = p2.next;
    }
    if(prev === null) return p1.next
    let next = p1.next
    prev.next = next;
    p1.next = null;
    return head;
    }
}
