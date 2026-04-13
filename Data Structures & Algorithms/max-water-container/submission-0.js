class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;
        while(left < right) {
            let currentArea = (right - left) * Math.min(heights[left], heights[right])
            console.log(currentArea)
            if(currentArea > maxArea) {
                maxArea = currentArea
            }
            if(heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }
        return maxArea
    }
}
