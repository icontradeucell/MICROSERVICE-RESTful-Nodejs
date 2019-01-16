
module.exports = ( User, conn, log, bcrypt ) => {

    conn.sync().then( () => {

        User.findOne({
            where: {
                username: 'admin'
            }
        }).then( res=> {
            if( res ) {
                log( bcrypt.compareSync( 'admin', res.pwd )) 
                log("Account admin already set")
                return null
            }
            User.create({
                username : 'admin',
                email : 'admin@system.com',
                method : 'local',
                pwd : 'admin',
                role: 'admin'
            }).then( res => {
                log("Account admin was create")
            }).catch( err => {
                log("There is err", err )
            })
        })
    })
}