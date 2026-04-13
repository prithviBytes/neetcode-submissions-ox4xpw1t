class TNode {
    constructor() {
        this.childrens = {};
        this.isWordEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.childrens[char]) {
                node.childrens[char] = new TNode();
            }
            node = node.childrens[char];
        }
        node.isWordEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.childrens[char]) {
                return false;
            }
            node = node.childrens[char];
        }
        return node.isWordEnd;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for(let char of prefix) {
            if(!node.childrens[char]) {
                return false;
            }
            node = node.childrens[char];
        }
        return true;
    }
}
