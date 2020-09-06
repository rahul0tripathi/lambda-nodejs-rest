'use strict';
const mysql = require('mysql2');
const config = require('./configuration.json')
const conn = {
    host: "<RDS-PROXY>",
    user: "<USERNAME>",
    database: "<DATABASE>",
    password: "<PASSWORD>",
}
const Database = mysql.createConnection(conn);

module.exports = {
    Database,
}