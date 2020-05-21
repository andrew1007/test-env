// target is zero
function threeSum(array) {
    const allSolns = []
    const idxArr = makeIdxArr(array)
    const max = array.length
    for (let i = 0; i < max; i++) {
        for (let j = i + 1; j < max; j++) {
            for (k = j + 1; k < max; k++) {
                const currArray = idxArr(i, j, k)
                if (sum(currArray) === 0) {
                    allSolns.push(currArray)
                }
            }
        }
    }
    return [...new Set(allSolns.map(stringifyArr))]
    .map(parseArr)
}

const stringifyArr = arr => JSON.stringify(arr.sort())
const parseArr = strArr => JSON.parse(strArr)

const makeIdxArr = (arr) => (...indexes) => indexes.map(idx => arr[idx])
const sum = (arr) => arr.reduce((a, b) => a + b, 0)



module.exports = threeSum