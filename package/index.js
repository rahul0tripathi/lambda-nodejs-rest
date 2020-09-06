'use strict'
const { Database } = require('./config/dbconn')
Database.connect(function(err) {
    if (err) throw err;
    console.log("Connected To Database");
  });
let core = require('./src/routes')
const { formatRes } = require('./src/services')
exports.handler = async (event, context) => {
    try {
        let res = await core.resolve(event)
        return res;  
    } catch (error) {
        return formatRes(null,null)
    }
   
}