module.exports = infra => {
    return ( msg, callback ) => {
        callback( null, { message: 'hello from order module2' } )
    }
}