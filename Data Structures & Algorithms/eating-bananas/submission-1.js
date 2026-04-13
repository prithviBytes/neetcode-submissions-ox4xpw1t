class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let minSpeed = 1;
        let maxSpeed = Math.max(...piles);
        while(minSpeed < maxSpeed) {
            let midSpeed = Math.floor((minSpeed + maxSpeed) / 2);
            let totalHours = 0;
            for(let pile of piles) {
                totalHours += Math.ceil(pile / midSpeed);
            }
            if(totalHours > h) {
                minSpeed = midSpeed + 1;
            } else {
                maxSpeed = midSpeed;
            }
        }
        return minSpeed
    }
}
