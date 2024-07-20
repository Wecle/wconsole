import { createLog } from '../utils/index'
import color from '../config/color'

function error (text, throwable = true) {
    const logName = throwable ? 'error' : 'log'
    const background = throwable ? '' : color.lightred
    createLog(logName)(`%c[Error] ${text}`, `font-weight: bold; color: ${color.red}; background: ${background}`)
}

export default error