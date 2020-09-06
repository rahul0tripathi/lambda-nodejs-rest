const exposedApis = {}
const {
    filterAttributes,
    formatRes
} = require('../services')

exposedApis.getS3Object = (req) => {
    return new Promise((resolve, reject) => {
        try {
              axios.get("<S3-URL>").then(async response => {
                        resolve(formatRes(response, 200))
                    }).catch(err => {
                        reject(formatRes(null, null))
                    })
        } catch (err) {
            reject(formatRes(null, null))
        }
    })
}
module.exports = {
    exposedApis
}