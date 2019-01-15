const { hosts } = require('../gateway/config.json')
const chokidar = require('chokidar')
const fs = require('fs')
const log = console.log.bind( console )
const routes = []

chokidar.watch('../gateway/config.json').on('all', (event, path) => {
    Object.keys( hosts ).forEach( host => {
        if( host !== 'gateway'){
            fs.copyFile('../gateway/config.json', `../${host}/config.json`, err => {
                console.log(`Copy config file to ${host} module` )
            })
        }
    })
})

Object.keys( hosts ).forEach( host => {
    if( host !== 'gateway') routes.push(`../${host}/routes/${host}.js`)
})

chokidar.watch( routes ).on('all', ( event, path ) => {
    log( path.split('/')[3])
    log( event )
    fs.copyFile( path, `../gateway/routes/${path.split('/')[3]}`, err => {
        if( err ) return log( err )
        log( `Copy routes form ${path} to gateway complet`)
    })
})

