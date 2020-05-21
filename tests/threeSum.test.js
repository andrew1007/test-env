const threeSum = require('../src/threeSum')

describe('threeSum', () => {
    it('sums with one solution', () => {
        const testArr = [1,3,4,-1, 0]
        const expected = [[1, -1, 0]]

        expect(threeSum(testArr).map(el => el.sort())).toEqual(expected.map(el => el.sort()))
    })
    it('return empty array when no solutions', () => {
        const testArr = [1, 3,4,-1, -1]
        const expected = []
        expect(threeSum(testArr)).toEqual(expected)
    })
    it('returns multiple solutions', () => {
        const testArr = [-1, 0, 1]
        const expected = [[-1, 0, 1]]
        expect(threeSum(testArr)).toEqual(expected)
    })
})