class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
            let formed = 0;
    let minLength = Infinity;
    let minLengthStartIndex = 0;
    let window = {}
    let targetMap = {}

    for(let char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1;
    }

    let target = Object.keys(targetMap).length;

    let left = 0, right = 0;
    while(right < s.length) {
        let rightCharacter = s[right];
        window[rightCharacter] = (window[rightCharacter] || 0) + 1;
        if(targetMap[rightCharacter] && targetMap[rightCharacter] === window[rightCharacter]) {
            formed++;
        }

        while(formed === target && left <= right) {
            if((right - left + 1) < minLength) {
                minLength = right - left + 1;
                minLengthStartIndex = left;
            }
            let leftCharacter = s[left];
            window[leftCharacter]--;
            if(targetMap[leftCharacter] && window[leftCharacter] < targetMap[leftCharacter]) {
                formed--;
            }
            left++;
        }
        right++;
    }
    return minLength === Infinity ? "" : s.slice(minLengthStartIndex, minLength + minLengthStartIndex)

    }
}
