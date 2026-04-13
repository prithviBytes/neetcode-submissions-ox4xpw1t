class TNode {
    constructor() {
        this.childrens = {};
        this.isWordEnd  = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
        function dfs(index, node) {
            if(index === word.length) {
                return node.isWordEnd;
            }
            let char = word[index];
            if(char === ".") {
                for(let child of Object.values(node.childrens)) {
                    if(dfs(index + 1, child)) {
                        return true
                    }
                }
            }
            if(!node.childrens[char]) {
                return false;
            }
            return dfs(index + 1, node.childrens[char])
        }
        return dfs(0, this.root);
    }
}
