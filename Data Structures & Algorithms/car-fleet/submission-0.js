class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    let carsWithPos = position.map((curr, idx) => {
        return {
            speed: speed[idx],
            position: curr
        }
    })
    let sorted = carsWithPos.sort((x , y)=> y.position - x.position)
    let stack = []
    for(let i = 0; i < sorted.length; i++) {
        let timeToReachTarget = (target - sorted[i].position) / sorted[i].speed;
        if(stack.length === 0 || timeToReachTarget > stack[stack.length - 1]) {
            stack.push(timeToReachTarget);
        }
    }
    return stack.length
    }
}
