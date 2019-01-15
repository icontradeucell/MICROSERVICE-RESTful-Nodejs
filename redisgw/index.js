const { hosts } = require('./config.json')
const seneca = require('seneca')()
const redis = require('redis')
const bluebird = require('bluebird')
bluebird.promisifyAll(redis)
const client = redis.createClient( 6379, 'redis' )


seneca.add('redisgw: *', ( msg, callback ) => {

    client[`${msg.redisgw}`]( msg.input ).then( res => {
        callback( null, { message : res })
    }).catch(err =>{
        callback( null , { message: 'There is err'})
    })
})

client.getAsync( 'test').then( res => {
    console.log( res )
})

seneca.listen( hosts.redisgw.port )
