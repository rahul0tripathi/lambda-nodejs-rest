const coreRouter = require('./src/routes')
const url = require('url')
const TYPE = {
  resolver: 'RESOLVER',
  route: 'ROUTE'
}
const METHOD = {
  get: 'GET',
  post: 'POST'
}
const processRequest = (event) => {
  return new Promise(async (resolve, reject) => {
    let res = {
      headers: {
        "Access-Control-Allow-Headers": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
      },
      body: JSON.stringify({
        data: "Internal Server Error",
        statusCode: 500
      }),
      statusCode: 500
    }
    try {
      let req = {
        path: event['path'],
        method: event['httpMethod'],
        headers: event['headers'],
        params: null,
        query: null
      }
      let metadata = url.parse(req['path'])
      metadata = {
        route: metadata.pathname.split('/'),
        method: req['method']
      }
      if (metadata['route'][0] == '') {
        metadata['route'].shift()
      }
      let endpoint = coreRouter
      for (let i = 0; i < metadata['route'].length; i++) {
        if (metadata.route[i] != undefined) {
          if (endpoint['type'] == TYPE['route']) {
            if (endpoint[metadata['method']][metadata.route[i]] || i == 0) {
              endpoint = endpoint[metadata['method']][metadata.route[i]]
            } else if (endpoint[metadata['method']]['/']) {
              endpoint = endpoint[metadata['method']]['/']

            } else {
              res = {
                headers: {
                  "Access-Control-Allow-Headers": "text/html",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                },
                body: JSON.stringify({
                  data: "Not Found",
                  statusCode: 404
                }),
                statusCode: 404
              }
              resolve(res)
            }
            if (i == metadata['route'].length - 1 && endpoint['type'] == TYPE['resolver']) {
              if (endpoint['params']) {
                for (j = 0; j < Object.keys(endpoint['params']).length; j++) {
                  endpoint['params'][Object.keys(endpoint['params'])[j]] = metadata['route'][i]
                  i++
                }
              }
              req.params = endpoint['params']
              res = await endpoint['endpoint'](req)
              resolve(res)
            }
          }
        } else {
          resolve(res)
          break;
        }
      }
    } catch (err) {
      resolve(res)
    }

  })
}

module.exports = {
  processRequest
}