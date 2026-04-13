class MinPriorityQueuee {
    constructor() {
        this.values = [];
    }

    enQueue(node) {
        this.values.push(node);
        this.bubbleUp()
    }

    getMin(){
        if(this.values.length === 0) return undefined;
        if(this.values.length === 1) return this.values.pop()
        let minNode = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return minNode;
    }

    getLength() {
        return this.values.length;
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1 )/ 2);
            let parentElement = this.values[parentIdx];
            if(parentElement.val < element.val) break;
            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
            idx = parentIdx;
        }
    }

    sinkDown() {
        let index = 0;
        let length = this.values.length;
        while(true) {
            let element = this.values[index];
            let leftChildIx = (index * 2 )+ 1;
            let rightChildIndex = (index * 2 )+ 2;
            let smallest = index;
            if(leftChildIx < length && this.values[leftChildIx].val < this.values[smallest].val) {
                smallest = leftChildIx;
            }
            if(rightChildIndex < length && this.values[rightChildIndex].val < this.values[smallest].val){
                smallest = rightChildIndex;
            }
            if(smallest === index) break;
            [this.values[index], this.values[smallest]] = [this.values[smallest], this.values[index]]
            index = smallest;
        } 
    }

        printHeap() {
        if (this.values.length === 0) {
            console.log("(empty values)");
            return;
        }

        let levels = [];
        let level = 0;
        let index = 0;

        while (index < this.values.length) {
            let count = Math.pow(2, level); // number of nodes at this level
            let levelNodes = this.values.slice(index, index + count).map(n => n.val ?? n);
            levels.push(levelNodes);
            index += count;
            level++;
        }

        // Display levels
        levels.forEach((nodes, i) => {
            let spacing = " ".repeat(Math.pow(2, levels.length - i));
            console.log(spacing + nodes.join("   "));
        });
    }

}
class Solution {

 mergeKLists(lists) {
    let minHeap = new MinPriorityQueuee();
    for(let list of lists) {
        if(list) minHeap.enQueue(list)
    }
    
    let dummy = new ListNode(0);
    let current = dummy;
    while(minHeap.getLength() !== 0) {
        let min = minHeap.getMin();
        current.next = min;
        current = current.next;
        if(min.next) {
            minHeap.enQueue(min.next)
        }
    }
    return dummy.next;
}
}