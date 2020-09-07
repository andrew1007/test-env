const makeIsPeak = (matrix) => (possiblePeak, x, y) => {
    const top = matrix[x] && matrix[x][y - 1]
    const left = matrix[x - 1] && matrix[x - 1][y]
    const right = matrix[x + 1] && matrix[x + 1][y]
    const bottom = matrix[x] && matrix[x][y + 1]

    return [top, left, right, bottom]
        .filter(val => typeof val === 'number')
        .every(val => possiblePeak > val)
}

const getMaxIdx = (arr) => {
    const maxVal = Math.max(...arr)
    return arr.findIndex(val => val === maxVal)
}

const isMaxVal = (arr) => (x, y) => {
    const curr = arr[x][y]
    const left = arr[x - 1] && arr[x - 1][y]
    const right = arr[x + 1] && arr[x + 1][y]
    return [left, right]
        .filter(val => typeof val === 'number')
        .every(val => val < curr)
}

const peaker = (arr, rows, columns, mid) => {
    
}

const eMatrixPeak = (matrix) => {

}

const matrixPeak = (matrix) => {
    const isPeak = makeIsPeak(matrix)
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const currentVal = matrix[i][j]
            if (isPeak(currentVal, i, j)) {
                return currentVal
            }
        }
    }
}

module.exports = matrixPeak
