module.exports = ({ redisgw, mysqlgw })  => {

    return ( msg, cb ) => {
        
        mysqlgw({
            mysqlgw: 'create',
            input: msg.input
        }).then( res => {
            res.message.pwd = ""
            redisgw({
                redisgw: 'setAsync',
                input: [ `getbyID_${res.message.user_id}`, JSON.stringify( res.message )]
            }).then(() => {
                cb( null, { message: 'user already create'})
            }).catch( err => {
                if( err.data.payload ) return cb( new Error( err.data.payload.details.message ))
                cb( new Error( JSON.stringify( err )))
            })
        })
    }
}