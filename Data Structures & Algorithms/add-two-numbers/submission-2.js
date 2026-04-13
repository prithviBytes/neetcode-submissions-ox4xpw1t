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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;
        let c1 = l1;
        let c2 = l2;
        while(c1 && c2) {
            let sum = c1.val + c2.val;
            if(carry > 0) {
                sum += carry;
                carry = 0;
            }
            if(sum > 9) {
                carry = Math.floor(sum / 10);
                sum = sum % 10;
            }
            let newNode = new ListNode(sum);
            current.next = newNode;
            current = current.next;
            c1 = c1.next;
            c2 = c2.next;
        }
        while(c1) {
            let sum = c1.val;
            if(carry > 0) {
                sum += carry;
                carry = 0;
            }
            if(sum > 9) {
                carry = Math.floor(sum / 10);
                sum = sum % 10;
            }
            let newNode = new ListNode(sum);
            current.next = newNode;
            current = current.next;
            c1 = c1.next;
        }
        while(c2) {
            let sum = c2.val;
            if(carry > 0) {
                sum += carry;
                carry = 0;
            }
            if(sum > 9) {
                carry = Math.floor(sum / 10);
                sum = sum % 10;
            }
            let newNode = new ListNode(sum);
            current.next = newNode;
            current = current.next;
            c2 = c2.next;
        }
        if(carry > 0) {
            let newNode = new ListNode(carry);
            current.next = newNode;
        }
        return dummy.next;
    }
}
