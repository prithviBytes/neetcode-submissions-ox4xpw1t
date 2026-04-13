class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0) {
            this.minStack.push(val)
        } else {
            let currentMin = this.minStack[this.minStack.length - 1];
            if(currentMin > val) {
                this.minStack.push(val);
            } else {
                this.minStack.push(currentMin);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length === 0) return null;
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.stack.length === 0) return null;
        return this.minStack[this.minStack.length - 1]
    }
}
