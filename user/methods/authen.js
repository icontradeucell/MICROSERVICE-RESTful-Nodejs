const bcrypt = require('bcryptjs')

module.exports = ({ redisgw, mysqlgw }) => {
    
    return ( msg, callback ) => {
        mysqlgw({
            mysqlgw: 'findOne',
            input: {
                where : {
                    username : msg.input.username
                }
            }
        }).then( res => {
            if( !bcrypt.compareSync( `${msg.input.pwd}`, `${res.message.pwd}` )) {
                return callback( null, { message : 'There is not correct username/password'})
            }
            let rnd = bcrypt.genSaltSync( 10 )
            let token = bcrypt.hashSync( `${res.message.user_id} + ${ rnd } +${res.message.username}` )
            redisgw({
                redisgw: 'setAsync',
                input: [ `token_${res.message.user_id}`, token ]
            }).then( res => {
                callback(null, {message: token})
            })
            
        }).catch( err => callback( err ))
    }
}