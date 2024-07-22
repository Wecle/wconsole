import text from './packages/text'
import rainbow from './packages/rainbow'
import error from './packages/error'
import palette from './packages/palette'
import image from './packages/image'

const wconsole = {
    text,
    rainbow,
    error,
    image,
    ...palette
}

export default wconsole