const championshipRouter = require('./championship')
const {
    streamRouter
} = require('./stream')
const TYPE = {
    resolver: 'RESOLVER',
    route: 'ROUTE'
  }
module.exports =  {
    type: TYPE['route'],
    GET: {
      'api': {
        type: TYPE['route'],
        GET: {
          'user': championshipRouter,
          's3': streamRouter
        },
        POST: null
      }
    },
    POST: null
  }