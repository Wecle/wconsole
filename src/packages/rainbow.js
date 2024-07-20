import { createLog, isOneDimensionalArray, concatLog } from '../utils/index'
import error from './error'

function rainbow (payload) {
    if (!Array.isArray(payload)) {
        return error('payload must be an array')
    }
    createLog()(...(isOneDimensionalArray(payload) ? concatLog(payload) : concatLog(...payload)))
}

export default rainbow