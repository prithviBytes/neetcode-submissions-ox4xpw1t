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
    let carry = 0;
    let curr1 = l1;
    let curr2 = l2;
    let dummy = new ListNode(0);
    let current = dummy;
    while(curr1 && curr2) {
        let sum = curr1.val + curr2.val;
        if(carry !== 0) {
            sum += carry;
            carry = 0;
        }
        if(sum > 9) {
            carry = Math.floor(sum / 10);
            sum = sum % 10
        }
        let newNode = new ListNode(sum);
        current.next = newNode;
        current = current.next;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    while(curr1) {
        let sum = curr1.val;
        if(carry !== 0) {
            sum += carry
            carry = 0;
            if(sum > 9) {
                carry = Math.floor(sum / 10)
                sum = sum % 10;
            }
            current.next = new ListNode(sum);
            current = current.next;
            curr1= curr1.next;
        } else {
            current.next = curr1;
            return dummy.next;
        }
    }
    while(curr2) {
        let sum = curr2.val;
        if(carry !== 0) {
            sum += carry
            carry = 0;
            if(sum > 9) {
                carry = Math.floor(sum / 10)
                sum = sum % 10;
            }
            current.next = new ListNode(sum);
            current = current.next;
            curr2= curr2.next;
        } else {
            current.next = curr2;
            return dummy.next;
        }
    }
    if(carry !== 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
    }
}
