const userRouter = require('./mysqlHandler')
const {
    s3Router
} = require('./s3Handler')
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
          'user': userRouter,
          's3': s3Router
        },
        POST: null
      }
    },
    POST: null
  }
