const {
    exposedApis
} = require('../controllers/s3Handler')
const TYPE = {
    resolver: 'RESOLVER',
    route: 'ROUTE'
}

const METHOD = {
    get: 'GET',
    post: 'POST'
}
const s3Router = {
    type: TYPE['route'],
    GET: {
        '/': {
            type: TYPE['resolver'],
            endpoint: exposedApis.getS3Object
        }
    },
    post: null
}
module.exports = {
    streamRouter
}
