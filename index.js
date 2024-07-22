import wconsole from './src/index.js'

wconsole.text('hello!')

wconsole.rainbow([['123', 'color: pink'], ['456', 'color: blue']])

wconsole.red('hello!!!!!')
wconsole.green('world!!!!!')

wconsole.image(`data:image/svg+xml,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><style>@keyframes spin {0% { transform: rotate(0deg); background: green; border-radius: 5px; }50% { transform: rotate(180deg); background: red; border-radius: 20px; }100% { transform: rotate(360deg); background: green; border-radius: 5px; }}.square {width: 50px;height: 50px;position: relative;left: 25px;top: 25px;background-color: red;animation: spin 2s linear infinite;}</style><foreignObject width='100' height='100'><div xmlns='http://www.w3.org/1999/xhtml' class='square'></div></foreignObject></svg>`)
