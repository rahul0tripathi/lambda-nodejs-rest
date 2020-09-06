process.env.NODE_ENV = "staging"
process.env.LAMBDA = false
let {
   Database
} = require('../../package/config/dbconn');
ewarDatabase.connect(function (err) {
    if (err) throw err;
});
let event = require('../events/sample-event.json')
let core = require('../../package/src/routes');
describe("Testing /api/sample/hello handler", () => {
    it('should return 200 response', async () => {
        let result = await core.resolve(event)
        expect(result).toMatchObject({
            statusCode: 200
        })
    })
    it('should return 404 response', async () => {
        let falsevent = {
            httpMethod: 'GET',
            path: '/api/events/wrong'
        }
        let result = await core.resolve(falsevent)
        expect(result).toMatchObject({statusCode:404})
    })
})