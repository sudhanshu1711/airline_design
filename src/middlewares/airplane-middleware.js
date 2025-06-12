const {StatusCodes} = require('http-status-codes')
const {ErrorResponse} = require('../utils/common/index.js')
function validateCreateRequest(req,res,next) {
   if(!req.body.modelNumber){
    ErrorResponse.message="something went wrong"
    ErrorResponse.error={explanation:"Model Number not found in the correct form"}
    return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse})
   }
   next()
}
module.exports={
    validateCreateRequest
}