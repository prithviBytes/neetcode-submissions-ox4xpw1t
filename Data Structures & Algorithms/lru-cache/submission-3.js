class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.head = new Node(null, null)
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.map = new Map()
    }

    _insert(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
        
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)) {
            const node = this.map.get(key);
            this._remove(node);
            this._insert(node);
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this._remove(node);
            this._insert(node);
        } else {
            if (this.map.size === this.capacity) {
                const lru = this.head.next;
                this._remove(lru);
                this.map.delete(lru.key);
            }
            const newNode = new Node(key, value);
            this._insert(newNode);
            this.map.set(key, newNode);
        }
    }
}
