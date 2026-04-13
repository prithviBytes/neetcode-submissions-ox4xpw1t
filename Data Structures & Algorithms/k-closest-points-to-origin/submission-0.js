class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _swap(k, v) {
        [this.heap[k], this.heap[v]] = [this.heap[v], this.heap[k]]
    }

    _bubbleUp(){
        let n = this.heap.length - 1;
        while(n > 0) {
            let parent = Math.floor((n - 1) / 2)
            if(this.heap[parent][0] > this.heap[n][0]) break;
            this._swap(parent, n);
            n = parent;
        } 
    }

    _sinkDown() {
        let n = 0;
        while(true) {
            let leftParent = n * 2 + 1;
            let rightParent = n * 2 + 2;
            let largest = n;
            if(leftParent < this.heap.length && this.heap[leftParent][0] > this.heap[largest][0]){
                largest = leftParent;
            }
            if(rightParent < this.heap.length && this.heap[rightParent][0] > this.heap[largest][0]) {
                largest = rightParent
            }
            if(largest === n) break;
            this._swap(largest, n);
            n = largest;
        }
    }

    insert(val) {
        this.heap.push(val)
        this._bubbleUp();
    }

    remove() {
        if(this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown();
    }

    top() {
        return this.heap[0]
    }

    size(){
        return this.heap.length;
    }

    getHeap() {
        return this.heap;
    }
}


class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let maxHeap = new MaxHeap();
        for(let point of points) {
            let distance = point[0] * point[0] + point[1] * point[1];
            if(maxHeap.size() < k) {
                maxHeap.insert([distance, point])
            } else {
                if(maxHeap.top()[0] > distance) {
                    maxHeap.remove();
                    maxHeap.insert([distance, point])
                }
            }
        }
        let output = []
        for(let val of maxHeap.getHeap()) {
            output.push(val[1])
        }
        return output
    }
}
