// 735. Asteroid Collision

const neg = (num) => num < 0
const pos = num => num > 0
const last = stack => stack[stack.length - 1]
/**
 * if positive, always add
 * continually compare last element of stack.
 *   if last element is positive and the size of current is higher, then remove last element in stack
 * if stack is empty, push element in
 * if last element in stack is negative, it will never collide, push in
 * if last element in stack is positive and the current asteroid added together is zero, remove
 */
const asteroidCollision = (asteroids) => {
    const stack = [asteroids[0]]
    for (const curr of asteroids.slice(1)) {
        if (pos(curr)) {
            stack.push(curr)
            continue
        }
        while (pos(last(stack)) && last(stack) < Math.abs(curr)) {
            stack.pop()
        }
        if (stack.length === 0 || neg(last(stack))) {
            stack.push(curr)
        }
        if (pos(last(stack)) && last(stack) + curr === 0) {
            stack.pop()
        }
    }
    return stack
}

module.exports = asteroidCollision
