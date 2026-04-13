class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0){
            this.minStack.push(val);
        } else {
            let minElement = this.minStack[this.minStack.length - 1]
            if(minElement > val) {
                this.minStack.push(val)
            } else {
                this.minStack.push(minElement)
            }
        }
        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length === 0) return null
        this.minStack.pop()
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
