class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right) {
            let currentArea = (right - left) * Math.min(heights[left], heights[right])
            if(currentArea > maxArea) maxArea = currentArea;
            if(heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }
        return maxArea;
    }
}
