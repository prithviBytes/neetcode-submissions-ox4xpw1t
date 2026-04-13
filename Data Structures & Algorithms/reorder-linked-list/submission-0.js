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
    let prev = null;
    let current = slow;
    while(current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    let temp = new ListNode(0);
    current = temp;
    let curr1 = head;
    let curr2 = prev;
    while(curr1 && curr2){
        let next1 = curr1.next;
        let next2 = curr2.next;
        if(curr1 === curr2) {
            current.next = curr1;
        } else {
            current.next = curr1;
            curr1.next = curr2;
        }
        current = curr2;
        curr1 = next1
        curr2 = next2;
    }
    return temp.next;
    }
}
