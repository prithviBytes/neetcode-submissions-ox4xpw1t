class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    arrayMatches(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(let i= 0 ; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true
}
    checkInclusion(s1, s2) {
    if(s1.length > s2.length) return false;
    let s1Mapper = Array(26).fill(0)
    let s2Mapper = Array(26).fill(0)
    const aCharCode = "a".charCodeAt(0)
    for(let i = 0; i < s1.length; i++) {
        s1Mapper[s1[i].charCodeAt(0) - aCharCode]++;
        s2Mapper[s2[i].charCodeAt(0) - aCharCode]++;
    }
    for(let i = s1.length; i < s2.length; i++) {
        console.log(i, s1Mapper, s2Mapper)
        if(this.arrayMatches(s1Mapper, s2Mapper)) return true;
        s2Mapper[s2.charCodeAt(i - s1.length) - aCharCode]--;
        s2Mapper[s2.charCodeAt(i) - aCharCode]++;
    }
    return this.arrayMatches(s1Mapper, s2Mapper)
    }
}
