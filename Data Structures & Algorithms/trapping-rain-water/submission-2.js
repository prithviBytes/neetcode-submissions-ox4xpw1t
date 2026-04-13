class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let prefixMax = Array(height.length);
        let suffixMax = Array(height.length);
        prefixMax[0] = height[0];
        for(let i = 1; i < height.length; i++) {
            if(height[i] > prefixMax[i - 1]){
                prefixMax[i] = height[i];
            } else {
                prefixMax[i] = prefixMax[i - 1];
            }
        }
        suffixMax[height.length - 1] = height[height.length - 1];
        for(let i = height.length - 2; i >= 0; i--) {
            if(height[i] > suffixMax[i + 1]){
                suffixMax[i] = height[i]
            } else {
                suffixMax[i] = suffixMax[i + 1];
            }
        }
        let total = 0;
        for(let i = 0; i < height.length; i++) {
            total += Math.min(prefixMax[i], suffixMax[i]) - height[i]
        }
        return total;
    }
}
