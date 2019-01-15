
module.exports = networks => {
    return ( msg, callback ) => {
        networks.mysqlgw({ mysqlgw: 'findAll'}).then( res => {
            callback( null, { message: res })
        }).catch( err => {
            callback( null, err )
        })     
    }
}