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
     * @param {number} k
     * @return {ListNode}
     */

    reverse(start, end) {
    let current = start;
    let prev = end.next;
    while(prev !== end) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return [end, start]
}
    reverseKGroup(head, k) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    while(head !== null) {
        let tail = pre;

        for(let i = 0; i < k; i++) {
            tail = tail.next;
            if(tail === null) {
                return dummy.next;
            }
        }
        let nextGroupHead = tail.next;
        [head, tail] = this.reverse(head, tail);
        pre.next = head;
        tail.next = nextGroupHead;

        pre = tail;
        head = nextGroupHead
    }
    return dummy.next
}
}
