module.exports = ({ redisgw, mysqlgw }) => {

    return ( msg, callback ) => {
        redisgw({
            redisgw: 'getAsync',
            input: `getbyID_${msg.input.id}`
        }).then( res => {
            if( res.message ) return callback( null, { message: JSON.parse( res.message )})
            return mysqlgw({
                mysqlgw: 'findOne',
                input: {
                    where: {
                        user_id: msg.input.id
                    }
                }
            }).then( res => {
                if( !res.message ) throw new Error('There is no data in sql')
                redisgw({
                    redisgw: 'setAsync',
                    input: [ `getbyID_${msg.input.id}`, JSON.stringify( res.message )]
                }).then(() => {
                    callback( null, { message : res.message })
                })
            })
        }).catch( err => callback( new Error(`${err}`)))
    }
}