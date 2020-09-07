// 735. Asteroid Collision

const neg = (num) => num < 0
const pos = num => num > 0
const last = stack => stack[stack.length - 1]
const incomingCollisionWithLargerAsteroid = (stack, asteroid) => neg(asteroid) && pos(last(stack)) && (Math.abs(asteroid) > last(stack))
const incomingCollisionWithSmallerAsteroid = (stack, asteroid) => pos(last(stack)) && neg(asteroid) && (last(stack) > Math.abs(asteroid))
const equallySizedCollision = (stack, asteroid) => last(stack) + asteroid === 0
/**
 * if asteroid is positive, ensure to not collide
 * if negative
 *  - if stack-last is positive, compare sizes repeatedly
 *  - if stack-last is negative, push to stack if not equal
 */
const asteroidCollision = (asteroids) => {
    const stack = [asteroids[0]]
    for (let asteroid of asteroids.slice(1)) {
        if (pos(asteroid)) {
            stack.push(asteroid)
            continue
        }
        // implied asteroid is negative
        while (pos(last(stack)) && Math.abs(asteroid) > last(stack)) {
            stack.pop()
        }
        if (last(stack) + asteroid === 0) {
            stack.pop()
            continue
        }
        if(pos(last(stack)) && last(stack) > Math.abs(asteroid)) {
            continue
        }
        stack.push(asteroid)
    }
    return stack
}

module.exports = asteroidCollision
