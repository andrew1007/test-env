/**
 * find longest common subsequence between two strings
 */

const terminate = (str1, str2) => !str1.length || !str2.length

const last = (str) => str[str.length - 1]
const sliceLast = str => str.slice(0, -1)

const subSeq = (str1, str2) => {
    if (terminate(str1, str2)) {
        return 0
    }
    if (last(str1) === last(str2)) {
        return 1 + subSeq(sliceLast(str1), sliceLast(str2))
    } else {
        return Math.max(subSeq(sliceLast(str1), str2), subSeq(str1, sliceLast(str2)))
    }
}

module.exports = subSeq
