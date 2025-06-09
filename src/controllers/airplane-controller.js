const {AirplaneService} = require('../services/index.js')
const {StatusCodes} = require('http-status-codes')

async function createAirplane(req,res){
      try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity:req.body.capacity
        })
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"successfully created an airplane",
            data:airplane,
            error:{}
        })
      } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Issue while creating an airplane",
            data:{},
            error:error
        })
      }
}
module.exports ={
    createAirplane
}