class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let structured = position.map((curr, idx) => {
            return {
                position: curr,
                speed: speed[idx]
            }
        })
        let stack = [];
        structured = structured.sort((x, y) => y.position - x.position)
        for(let car of structured) {
            let timeForFinish = (target - car.position) / car.speed;
            if(stack.length === 0 || timeForFinish > stack[stack.length - 1]){
                stack.push(timeForFinish)
            }
        }
        return stack.length
    }
}
