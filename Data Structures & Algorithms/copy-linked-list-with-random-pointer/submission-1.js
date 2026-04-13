// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
    if (!head) return null;

    let map = new Map();
    let current = head;

    // First pass: create new nodes and map originals to copies
    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: set next and random pointers
    current = head;
    while (current) {
        let copy = map.get(current);
        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;
        current = current.next;
    }

    return map.get(head);
    }
}
