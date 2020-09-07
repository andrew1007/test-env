const asteroidCollision = require("../src/asteroidCollision")

describe('asteroidCollision', () => {
    it('tests', () => {
        expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2])
    })
    it('tests', () => {
        // [-2,-2,-2]
        expect(asteroidCollision([-2, -2, -1, -2])).toEqual([-2, -2, -1, -2])
    })
    it('tests', () => {
        expect(asteroidCollision([10, 2, -5])).toEqual([10])
    })
    it('tests', () => {
        expect(asteroidCollision([-2, -2, 2, 1])).toEqual([-2, -2, 2, 1])
    })
    it('tests', () => {
        expect(asteroidCollision([-2, -2, 1, -2])).toEqual([-2, -2, -2])
    })
    it('tests', () => {
        expect(asteroidCollision([-2, -2, -2, 1])).toEqual([-2, -2, -2, 1])
    })
    it('tests', () => {
        expect(asteroidCollision([-2, -2, 1, -1])).toEqual([-2, -2])
    })
})