class MinHeap {
    constructor() {
        this.heap = []
    }

    _swap(k, v) {
        [this.heap[k], this.heap[v]] = [this.heap[v], this.heap[k]]
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while(i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if(this.heap[parent] < this.heap[i]) break;
            this._swap(parent, i);
            i = parent;
        }
    }

    _sinkDown() {
        let i = 0;
        while(true) {
            let leftIndex = i * 2 + 1
            let rightIndex = i * 2 + 2
            let smallest = i;
            if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]) {
                smallest = leftIndex
            }
            if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[smallest]) {
                smallest = rightIndex
            }
            if(smallest === i) break;
            this._swap(smallest, i);
            i = smallest;
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
        this._sinkDown()
        return top;
    }

    top() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinHeap();
        for(let num of nums) {
            if(minHeap.size() < k) {
                minHeap.insert(num);
            } else {
                if(minHeap.top() < num) {
                    minHeap.remove();
                    minHeap.insert(num);
                }
            }
        }
        return minHeap.top()
    }
}
