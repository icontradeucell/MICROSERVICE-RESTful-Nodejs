module.exports = ( Sequelize, conn, bcrypt ) => {
    let { INTEGER, STRING } = Sequelize;
    const User = conn.define('users', {
        user_id : { type: INTEGER, primaryKey: true, autoIncrement: true },
        username : { type: STRING, primaryKey: true, allowNull: false, unique: true }, 
        email : { type: STRING, primaryKey: true, allowNull: false, unique: true },
        method : { type: STRING, allowNull: false },
        pwd: { type: STRING, allowNull: false },
        role: { type: STRING, allowNull: false }
    },
    {
        hooks: {
            beforeCreate : user => {
                user.pwd = bcrypt.hashSync( user.pwd, bcrypt.genSaltSync( 10 ) )
            }
        },
    });


    return User
}