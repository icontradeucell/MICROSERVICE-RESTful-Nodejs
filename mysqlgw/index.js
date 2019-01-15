const log = console.log.bind( console )
const { mysql, hosts } = require('./config.json')
const seneca = require('seneca')()
const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const conn = new Sequelize( mysql )


conn.authenticate().then( res => {
    log('Connection was ok')
}).catch( err => {
    log('There was err to connect', err )  
})

const User = require('./models/user')( Sequelize, conn, bcrypt )
require('./backend/firsttime')( User, conn, log, bcrypt )

seneca.add( 'mysqlgw: *', ( msg, reply ) => {
    console.log( msg.input )
    User[msg.mysqlgw](
        msg.input
    ).then( res => {
        reply( null, { message: res })
    }).catch( err => {
        reply( new Error( JSON.stringify( err.errors )))
    })
})

seneca.listen( hosts.mysqlgw.port )