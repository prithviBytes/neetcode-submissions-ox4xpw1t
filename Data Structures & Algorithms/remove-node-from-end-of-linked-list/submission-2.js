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
        for(let i = 0; i < n; i++) {
            if (p1 === null) return head
            p1 = p1.next;
        }
        
        if (p1 === null) {
            const newHead = head.next;
            head.next = null;
            return newHead;
        }

        while(p1.next !== null) {
            p1 = p1.next;
            p2 = p2.next;
        }
        
        p2.next = p2.next.next; // fix: update the link from p2
        return head;

    }
}
