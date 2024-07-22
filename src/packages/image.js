import { createLog } from '../utils/index'
import error from './error'

function image (payload, options) {
    if (typeof payload !== 'string') {
        return error('payload must be an string')
    }
    const { paddingLeft = '100px', lineHeight = '100px' } = options || {}
    createLog()('%c ', `padding-left: ${paddingLeft}; line-height: ${lineHeight}; background-repeat: no-repeat; background-image: url("${payload}")`)
}

export default image