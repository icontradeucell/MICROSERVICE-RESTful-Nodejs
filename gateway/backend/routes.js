const fs = require('fs');
const router = require('express').Router();

module.exports = input => {
    
    fs.readdirSync('./routes').forEach( file => {
        router.use(`/${file.replace('.js', '')}`, require(`../routes/${file}`)( input ))
    })

    return router
}