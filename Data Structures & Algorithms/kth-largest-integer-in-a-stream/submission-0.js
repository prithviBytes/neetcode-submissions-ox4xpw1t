class MinHeap {
    constructor() {
        this.heap = [];
    }

    _swap(j,k) {
        [this.heap[j], this.heap[k]] = [this.heap[k], this.heap[j]]
    }

    size() {
        return this.heap.length;
    }
    _bubbleUp() {
        let i = this.heap.length - 1;
        while(i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if(this.heap[i] >= this.heap[parent]) break;
            this._swap(i, parent);
            i = parent; 
        }
    }

    _sinkDown() {
        let i = 0;
        const n = this.heap.length;
        while(true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;
            if(left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if(right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if(smallest === i) break;
            this._swap(i, smallest);
            i = smallest;
        }
    }

    push(val) {
        this.heap.push(val)
        this._bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()
        this._sinkDown();
        return top;
    }

    top() {
        return this.heap[0]
    }
}


class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();
        for(let i = 0; i < nums.length; i++) {
            this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val);
        if(this.heap.size() > this.k) {
            this.heap.pop();
        }
        return this.heap.top();
    }
}
