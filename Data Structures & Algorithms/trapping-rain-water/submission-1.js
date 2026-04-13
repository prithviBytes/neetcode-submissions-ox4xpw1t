class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
    let prefixMax = Array(heights.length)
    let suffixMax = Array(heights.length)
    prefixMax[0] = heights[0]
    for(let i = 1; i < heights.length; i++) {
        if(heights[i] > prefixMax[i - 1]) {
            prefixMax[i] = heights[i]
        } else {
            prefixMax[i] = prefixMax[i - 1]
        }
    }
    suffixMax[heights.length - 1] = heights[heights.length - 1]
    for(let i = heights.length - 2; i >= 0; i--) {
        if(heights[i] > suffixMax[i + 1]) {
            suffixMax[i] = heights[i]
        } else {
            suffixMax[i] = suffixMax[i + 1]
        }
    }
    console.log(prefixMax, suffixMax)
    let total = 0
    for(let i = 1; i < heights.length - 1; i++) {
        total += (Math.min(prefixMax[i], suffixMax[i]) - heights[i])
    }
    return total;
    }
}
