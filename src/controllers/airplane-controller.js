const {AirplaneService} = require('../services/index.js')
const {StatusCodes} = require('http-status-codes')
const {ErrorResponse,SuccessResponse} = require('../utils/common/index.js')

async function createAirplane(req,res){
      try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data=airplane
        return res.status(StatusCodes.OK).json({SuccessResponse})
      } catch (error) {
        ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
      }
}
module.exports ={
    createAirplane
}