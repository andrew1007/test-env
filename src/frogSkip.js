// leetcode 403 frog jump
const canCross = (stones) => {
    let prevStepSize
    for (let i = 0; i < stones.length - 1; i++) {
        if (i === 0) {
            prevStepSize = stones[i+1] - stones[i]
            continue
        }
        const currentStepSize = stones[i + 1] - stones[i]
        const maxAllowedStepSize = prevStepSize + 1
        const minAllowedStepSize = prevStepSize - 1
        if (maxAllowedStepSize >= currentStepSize && minAllowedStepSize <= currentStepSize) {
            prevStepSize = currentStepSize
        } else {
            return false
        }
    }
    return true
};

module.exports = canCross
