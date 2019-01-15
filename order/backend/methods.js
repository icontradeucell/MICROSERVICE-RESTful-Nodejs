const seneca = require('seneca')()
const fs = require('fs')

module.exports = networks => {
    
    fs.readdirSync('./methods').forEach( method => {
        method = method.replace('.js', '' )
        seneca.add(`order:${method}`, require(`../methods/${method}`)( networks ))
    })

    return seneca
}

