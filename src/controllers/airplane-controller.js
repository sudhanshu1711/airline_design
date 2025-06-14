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

async function getAirplanes(req,res) {
  try {
    const airplanes = await AirplaneService.getAirlplanes()
    SuccessResponse.data= airplanes
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
     ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
  }
}

async function getAirplane(req,res){
    try {
const airplanes = await AirplaneService.getAirplane(req.params.id)
    SuccessResponse.data= airplanes
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
     ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
  } 
}

async function destroyAirplane(req,res) {
  try {
    const airplanes = await AirplaneService.destroyAirplane(req.params.id)
    SuccessResponse.data= airplanes
    return res.status(StatusCodes.OK).json(SuccessResponse)
  } catch (error) {
     ErrorResponse.error=error
        return res.status(error.statusCode).json(ErrorResponse)
  }
}

async function updateAirplane(req, res) {
  try {
    const updatedAirplane = await AirplaneService.updateAirplane(req.params.id, req.body);
    SuccessResponse.data = updatedAirplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}