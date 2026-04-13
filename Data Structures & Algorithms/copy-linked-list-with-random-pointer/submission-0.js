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
    if(!head) return null;
    let newHead = new Node(0);
    let newCurrent = newHead;
    let current  = head;
    let copiesMap = new Map();
    while(current) {
        let newNode = new Node(current.val, current.next);
        newCurrent.next = newNode;
        copiesMap.set(newNode, current);
        copiesMap.set(current, newNode);
        newCurrent = newNode;
        current = current.next;
    }
    newCurrent = newHead.next;
    while(newCurrent) {
        let oldCopy = copiesMap.get(newCurrent);
        console.log(copiesMap)
        newCurrent.random = copiesMap.get(oldCopy.random);
        newCurrent = newCurrent.next;
    }
    return newHead.next;
    }
}
