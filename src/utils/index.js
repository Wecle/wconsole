export function createLog (name) {
    const _console = console

    return function (...args) {
        const func = _console[name] || _console.log
        func.apply(void 0, args)
    }
}

export function isOneDimensionalArray (arr) {
    return Array.isArray(arr) && arr.every(elm => !Array.isArray(elm))
}

export function concatLog (...arr) {
    const result = ['']
    for (const [first, ...other] of arr) {
        result[0] += `%c${first}`
        result.push(...other)
    }
    return result
}