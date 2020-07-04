const {
    Database
} = require('../../config/dbconn')
const {
    userFields,
    users
} = require('./Model')
const databasesList = {
    users,
    
}
const fields = {
    userFields
}
module.exports = {
    Database,
    databasesList,
    fields
}