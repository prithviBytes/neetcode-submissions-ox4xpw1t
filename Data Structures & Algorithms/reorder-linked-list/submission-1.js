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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let current = slow;
        let prev = null;
        let next;
        while(current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        let temp = new ListNode(0);
    current = temp;
        let l1 = head;
        let l2 = prev;
        while(l1 && l2) {
            let n1 = l1.next;
            let n2 = l2.next;
            if(l1 === l2) {
                current.next= l1;
            } else {
                current.next = l1;
                l1.next = l2;
            }
            current = l2
            l1 = n1;
            l2 = n2;
        }
        return temp.next;
    }
}
