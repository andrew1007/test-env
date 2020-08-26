const gatesAndWalls = require('../src/gatesAndWalls')

describe('gatesAndWalls', () => {
    it('calculates', () => {
        const walls = [
            ['INF', -1, 0, 'INF'],
            ['INF', 'INF', 'INF', -1],
            ['INF', -1, 'INF', - 1],
            [0, - 1, 'INF', 'INF']
        ]

        const expected = [
            [3, -1, 0, 1],
            [2, 2, 1, -1],
            [1, -1, 2, -1],
            [0, -1, 3, 4],
        ]
        expect(gatesAndWalls(walls)).toEqual(expected)
    })
})