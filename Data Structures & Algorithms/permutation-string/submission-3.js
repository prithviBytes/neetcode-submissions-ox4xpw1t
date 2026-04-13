class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    isArraySame(arr1, arr2) {
        for(let i = 0; i < arr1.length; i++) {
            if(arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
    getCharCode(char) {
        return char.charCodeAt(0) - "a".charCodeAt(0);
    }
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let s1Mapper = Array(26).fill(0);
        let s2Mapper = Array(26).fill(0);
        for(let i = 0; i < s1.length; i++) {
            s1Mapper[this.getCharCode(s1[i])]++;
            s2Mapper[this.getCharCode(s2[i])]++;
        }
        for(let i = s1.length; i < s2.length; i++) {
            if(this.isArraySame(s1Mapper, s2Mapper)) return true;
            s2Mapper[this.getCharCode(s2[i - s1.length])]--;
            s2Mapper[this.getCharCode(s2[i])]++;
        }
        return this.isArraySame(s1Mapper, s2Mapper)
    }
}
