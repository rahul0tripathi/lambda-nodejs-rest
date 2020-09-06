let galaxy = require('@rahul_tripathi/galaxy')
const {
    exposedApis
} = require('../controllers/s3Handler')
let sampleRoute = galaxy.Star('sample')
sampleRoute.append(galaxy.Moon('hello', exposedApis.getS3Object, 'GET'))
/*
Translates to -> GET /sample/hello
*/
module.exports = sampleRoute
