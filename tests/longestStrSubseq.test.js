const subSeq = require("../src/longestStrSubseq")

describe('longestStrSubseq', () => {
    it('works', () => {
        expect(subSeq('aab', 'aaz')).toEqual(2)
    })
    it('works', () => {
        expect(subSeq('aab', 'azb')).toEqual(2)
    })
    it('works', () => {
        expect(subSeq('aabgrg', 'azbfg')).toEqual(3)
    })
})