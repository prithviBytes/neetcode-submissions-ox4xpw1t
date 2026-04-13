class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for(let i = 0; i < strs.length; i++){
            encodedString += `${strs[i].length}#${strs[i]}`
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let encodedString = str;
        let result = []
        let i = 0;
        while(i < encodedString.length){
            let j = i
            while(encodedString[j] !== "#"){
                j++
            }
            let currentStringLength = parseInt(encodedString.slice(i,j))
            result.push(encodedString.slice(j + 1, j + 1 + currentStringLength))
            i = j + 1 + currentStringLength
        }
        return result
    }
}
