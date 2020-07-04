const filterAttributes = (attributes, rawData) => {
    return Object.keys(rawData).filter(key => attributes.includes(key)).reduce((temp, key) => {
        temp[key] = rawData[key]
        return temp;
    }, {})
}
const formatRes = (data, code, headers) => {
    return {
        headers: {
            "Access-Control-Allow-Headers": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body: data ? JSON.stringify({
            result: {
                data: data
            },
            statusCode: code ? code : 500
        }) : JSON.stringify({
            data: "Internal Server Error",
            statusCode: 500
        }),
        statusCode: code ? code : 500
    }
}
module.exports = {
    filterAttributes,
    formatRes
}