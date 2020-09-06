let galaxy = require('@rahul_tripathi/galaxy')
const { sampleRouter }  = require('./sample')
let router = galaxy.Galaxy('api')
router.append(sampleRouter)
/*
Translates to -> GET /api/sample/hello
*/
module.exports = router