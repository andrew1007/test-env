const canCross = require("../src/frogSkip")

describe('frogSkip', () => {
    xit('successful skips basic case', () => {
        const stones = [0, 1, 3, 4, 5, 7, 9, 10, 12]
        expect(canCross(stones)).toEqual(true)
    })
    it('successful skips basic case', () => {
        const stones = [0, 1, 3, 5, 6, 8, 12, 17]
        expect(canCross(stones)).toEqual(true)
    })
})

