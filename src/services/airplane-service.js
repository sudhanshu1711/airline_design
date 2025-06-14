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

async function getAirlplanes(){
  try {
    const airplanes = await airplaneRepo.getAll()
    return airplanes
  } catch (error) {
     throw new AppError("Cannot fetch data",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function getAirplane(id) {
   try {
    const airplanes = await airplaneRepo.get(id)
    return airplanes
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError("The airplane you requested is not present",error.statusCode)
    }
     throw new AppError("Cannot fetch data",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function destroyAirplane(id){
  try {
    const airplanes = await airplaneRepo.destroy(id)
    return airplanes
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError("The airplane you requested to delete is not present",error.statusCode)
    }
     throw new AppError("Cannot fetch data",StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

async function updateAirplane(id, data) {
  try {
    const updatedAirplane = await airplaneRepo.update(id, data);
    return updatedAirplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND) {
      throw new AppError("The airplane you're trying to update was not found", error.statusCode);
    }
    throw new AppError("Cannot update airplane", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {createAirplane,getAirlplanes,getAirplane,destroyAirplane,updateAirplane}