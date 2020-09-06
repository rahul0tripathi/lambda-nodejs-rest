# creating a new event for test
```bash 
    sam local generate-event apigateway aws-proxy --body "{BODY}" --path "{PATH}" --method {METHOD} > ./__test__/events/{event-name}.json
```
- example 
```bash 
         sam local generate-event apigateway aws-proxy --body "" --path "api/hello/" --method GET > ./__test__/events/sample-event.json
```
# running api server 
```bash 
sam local start-api
```

# demo event object 
```json
  {
  httpMethod: 'GET',
  body: null,
  resource: '/{proxy+}',
  requestContext: {
    resourceId: '123456',
    apiId: '1234567890',
    resourcePath: '/{proxy+}',
    httpMethod: 'GET',
    requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
    accountId: '123456789012',
    stage: 'Prod',
    identity: {
      apiKey: null,
      userArn: null,
      cognitoAuthenticationType: null,
      caller: null,
      userAgent: 'Custom User Agent String',
      user: null,
      cognitoIdentityPoolId: null,
      cognitoAuthenticationProvider: null,
      sourceIp: '127.0.0.1',
      accountId: null
    },
    extendedRequestId: null,
    path: '/{proxy+}',
    protocol: 'HTTP/1.1',
    domainName: 'localhost:3000',
    requestTimeEpoch: 1597669740,
    requestTime: '17/Aug/2020:13:09:00 +0000'
  },
  queryStringParameters: { a: '10', b: 'c' },
  multiValueQueryStringParameters: { a: [ '10' ], b: [ 'c' ] },
  headers: {
    'User-Agent': 'PostmanRuntime/7.26.3',
    Accept: '*/*',
    'Cache-Control': 'no-cache',
    'Postman-Token': '2c39c7ef-6455-40dc-89e3-ac4e6ca35720',
    Host: 'localhost:3000',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    'X-Forwarded-Proto': 'http',
    'X-Forwarded-Port': '3000'
  },
  multiValueHeaders: {
    'User-Agent': [ 'PostmanRuntime/7.26.3' ],
    Accept: [ '*/*' ],
    'Cache-Control': [ 'no-cache' ],
    'Postman-Token': [ '2c39c7ef-6455-40dc-89e3-ac4e6ca35720' ],
    Host: [ 'localhost:3000' ],
    'Accept-Encoding': [ 'gzip, deflate, br' ],
    Connection: [ 'keep-alive' ],
    'X-Forwarded-Proto': [ 'http' ],
    'X-Forwarded-Port': [ '3000' ]
  },
  pathParameters: { proxy: 'api/hello' },
  stageVariables: null,
  path: '/api/hello',
  isBase64Encoded: false
}
```

 # run test
  ``` jest run test ```