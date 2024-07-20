import { createLog } from '../utils/index'
import error from './error'

function text (payload) {
    if (typeof payload !== 'string') {
        return error('payload must be an string')
    }
    createLog()(`%c[Log] ${payload}`, `font-weight: bold`)
}

export default text