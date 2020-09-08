const stringSimilarity = require("../src/stringSimilarity")

describe('stringSimilarity', () => {
    it('works', () => {
        expect(stringSimilarity('ababaa')).toEqual(11)
    })
    it('works', () => {
        expect(stringSimilarity('aa')).toEqual(3)
    })
})