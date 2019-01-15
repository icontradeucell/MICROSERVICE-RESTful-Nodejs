const Promise = require('bluebird')

module.exports = hosts => {

    let networks = {}
    Object.keys( hosts ).forEach( host => {
        networks[host] = require('seneca')({ log: 'silent'}).client(hosts[host])
        networks[host] = Promise.promisify( networks[host].act , {
            context: networks[host]
        })
    }) 
    
    return networks
}
