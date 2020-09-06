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
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            "Content-Type": "application/json"
        },
        body: (data != null || code ) ? JSON.stringify({
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
const Redirect = (location) => {
    return {
        headers: {
            'Location': location,
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 301
    }
}
module.exports = {
    filterAttributes,
    formatRes,
    Redirect
}