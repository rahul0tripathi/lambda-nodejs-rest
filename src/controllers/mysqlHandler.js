const {
    Database,
    databaseList,
    fields: {
        userFields
    }
} = require('../model')
const sqlString = require('sqlstring')
const axios = require('axios')
const exposedApis = {}
const {
    filterAttributes,
    formatRes
} = require('../services')

exposedApis.getUserById = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            ewarDatabase.promise().query(sqlString.format(`SELECT * FROM ${databaseList.users} WHERE ${userFields.id} = ?`, req.params.id)).then(([rows, cols]) => {
                rows = rows[0]
                let attributes = [
                    /*
                        list of user fields to filter
                    */
                ]
                rows = filterAttributes(attributes, rows)
                resolve(formatRes(rows, 200))
            }).catch(err => {
                reject(formatRes(null, null))
            })
        } catch (error) {
            reject(formatRes(null, null))
        }
    })
}
exposedApis.getDetailsForParticularPhase = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
                
                    axios.get(<S3-URL>).then(async response => {
                        resolve(formatRes(response, 200))
                    }).catch(err => {
                        reject(formatRes(null, null))
                    })
                
          

        } catch (error) {
            reject(formatRes(null, null))
        }
    })
};
module.exports = {
    exposedApis
}