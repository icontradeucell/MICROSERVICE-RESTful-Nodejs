const router = require('express').Router()

module.exports =   networks  => {

    router.get('/getbyID/:id', ( req, res, next ) => {
        networks.user({ user: 'getbyID', input: req.params }).then( result => {
            res.send( result.message )
        }).catch( err => next( err ))
    })

    router.post('/add', ( req, res, next ) => {
        networks.user({ user: 'add', input: req.body }).then( result => {
            res.send( result.message )
        }).catch( err => next( err ))
    })

    router.post('/authen', ( req, res, next ) => {
        networks.user({ user: 'authen', input: req.body }).then( result => {
            res.send( result.message )
        }).catch( err => next( err))
    })

    return router
}