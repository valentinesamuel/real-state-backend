/**
 * @description A function that abstracts the response of a succesful request
 * @param {Response} res Http response object
 * @param {String} message Custom succes message
 * @param {Object} payload Server response payload
 * @param {Number} [statusCode = 200] Http response status code that defaults to 200
 * @returns {Response} Http response with success status code and response payload 
*/
const successResponse = (res, message, payload, statusCode = 200) => {
    const responsePayload = {
        status: "Success",
        statusCode: statusCode,
        message,
        payload,
    }
    return res.status(statusCode).json(responsePayload)
}

/**
 * @description A function that abstracts the response of a failed request
 * @param {Response} res Http response object
 * @param {String} message Custom succes message
 * @param {Object} errorPayload Server response error payload
 * @param {Number} [statusCode = 500] Http response status code that defaults to 500
 * @returns {Response} Http response with success status code and response payload 
*/
const errorResponse = (res, message, errorPayload, statusCode = 500) => {
    let errorMessage
    if (message == null) {
        switch (statusCode) {
            case 400:
                errorMessage = "Bad Request"
                break;
            case 401:
                errorMessage = "Unauthorised"
                break;
            case 403:
                errorMessage = "Invalid User Access"
                break;
            case 404:
                errorMessage = "Resource Not Found"
                break;

            default:
                errorMessage = "Internal Server Error"
                break;
        }
    } else {
        errorMessage = message
    }
    return res.status(statusCode).json({
        error: {
            errorPayload,
            statusCode: statusCode,
            message: errorMessage.replace(/[\"]/gi, '')
        }
    })
}

module.exports(
    successResponse,
    errorResponse
)