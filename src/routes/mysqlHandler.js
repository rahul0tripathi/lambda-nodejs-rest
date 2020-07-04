const {
    exposedApis
} = require('../controllers/mysqlHandler')
const TYPE = {
    resolver: 'RESOLVER',
    route: 'ROUTE'
}
const mysqlRouter = {
    type: TYPE['route'],
    GET: {
        '/': {
            params: {
                'id': null
            },
            type: TYPE['resolver'],
            endpoint: exposedApis.getUserById
        },
        '<ANOTHER-ROUTE>': {
            type: TYPE['route'],
            GET: {
                '/': {
                    params: {
                        'id': null
                    },
                    type: TYPE['resolver'],
                    endpoint:<RESOLVER>
                }
            }
        }
    },
    post: null
}
module.exports = userRouter
