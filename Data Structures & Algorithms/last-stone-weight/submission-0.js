class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _swap(k, v) {
        [this.heap[k], this.heap[v]] = [this.heap[v], this.heap[k]];
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while(i > 0) {
            let parentIdx = Math.floor((i - 1) / 2);
            if(this.heap[parentIdx] > this.heap[i]) break;
            this._swap(parentIdx, i);
            i = parentIdx;
        }
    }

    _sinkDown() {
        let i = 0;
        while(true) {
            let leftParentIdx = (i * 2) + 1
            let rightParentIdx = (i * 2) + 2
            let largest = i;
            if(leftParentIdx < this.heap.length && this.heap[leftParentIdx] > this.heap[largest]) {
                largest = leftParentIdx
            }
            if(rightParentIdx < this.heap.length && this.heap[rightParentIdx] > this.heap[largest]) {
                largest = rightParentIdx;
            }
            if(i === largest) break;
            this._swap(largest, i);
            i = largest;
        }
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    remove() {
        if(this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown();
        return top;
    }
    size() {
        return this.heap.length
    }
    top(){
        console.log(this.heap)
        return this.heap[0]
    }
}



class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxHeap();
        stones.forEach(stone => {
            maxHeap.insert(stone)
        })
        while(maxHeap.size() > 1) {
            let ele1 = maxHeap.remove();
            let ele2 = maxHeap.remove();
            let diff = Math.abs(ele1 - ele2);
            if(diff > 0) {
                maxHeap.insert(diff);
            }
        }
        return maxHeap.size() === 1 ? maxHeap.top() : 0;
    }
}
