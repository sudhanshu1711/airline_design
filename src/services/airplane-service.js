const {AirplaneRepo} = require('../repositories/index.js')
const {StatusCodes} = require('http-status-codes')
const AppError = require('../utils/errors/app-error.js')

const airplaneRepo = new AirplaneRepo()

async function createAirplane(data){
    try {
      const airplane = await airplaneRepo.create(data)
      return airplane  
    } catch (error) {
    if(error.name==="SequelizeValidationError"){
     let explanation = []
     error.errors.forEach((err)=>{
      explanation.push(err.message)
     })
     throw new AppError(explanation,StatusCodes.BAD_REQUEST)
    }
    throw new AppError("cannot create an airplane",StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 

module.exports = {createAirplane}