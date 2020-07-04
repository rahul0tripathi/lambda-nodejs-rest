'use strict'
let {
    processRequest
} = require('./app')
const { Database } = require('./config/dbconn')
Database.connect(function(err) {
    if (err) throw err;
    console.log("Connected To Database");
  });
exports.handler = async (event, context) => {
    let res = await processRequest(event)
    return res;
}