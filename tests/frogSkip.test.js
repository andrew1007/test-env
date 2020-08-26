const canCross = require("../src/frogSkip")

describe('frogSkip', () => {
    it('successful skips basic case', () => {
        const stones =[0,1,3,4,5,7,9,10,12]
        expect(canCross(stones)).toEqual(true)
    })
})

