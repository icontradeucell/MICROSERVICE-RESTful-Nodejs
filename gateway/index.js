const config = require('./config.json')
const api = require('express')()
const bodyParser = require('body-parser')
const networks = require('./backend/networks')( config.hosts )
const routes = require('./backend/routes')(  networks )

api.use( bodyParser.json() )
api.use( bodyParser.urlencoded({ extended: false }))
api.use('/api', routes )    
api.use(( err, req, res, next ) => {

    res.send( err )
})
api.listen( 80, console.log('API was start'))
