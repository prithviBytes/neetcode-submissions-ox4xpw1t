class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(null, null); // dummy head
        this.tail = new Node(null, null); // dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _insert(node) {
        node.prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev.next = node;
        this.tail.prev = node;
    }

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this._remove(node);
            this._insert(node); // move to tail
            return node.value;
        }
        return -1;
    }

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