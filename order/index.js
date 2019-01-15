const { hosts } = require('./config.json')
const networks = require('./backend/networks')( hosts )
const seneca = require('./backend/methods')( networks )

seneca.listen( hosts.order.port )