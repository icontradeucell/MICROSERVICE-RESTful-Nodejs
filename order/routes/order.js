const router = require('express').Router()

module.exports =   networks  => {

    router.get('/add', ( req, res ) => {
        networks.order({ order: 'add' }).then( result => {
            res.send( result )
        })
    })

    return router
}