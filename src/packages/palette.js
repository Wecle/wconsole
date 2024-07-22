import { createLog } from '../utils/index'
import error from './error'
import style from '../config/style'

const palette = {}

Object.keys(style.color).forEach(key => {
    palette[key] = (payload) => {
        if (typeof payload !== 'string') {
            return error('payload must be an string')
        }
        createLog()(`%c${payload}`, `color: ${style.color[key]}`)
    }
})

export default palette