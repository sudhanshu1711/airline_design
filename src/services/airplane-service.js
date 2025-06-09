const {AirplaneRepo} = require('../repositories/index.js')

const airplaneRepo = new AirplaneRepo()

async function createAirplane(data){
    try {
      const airplane = await airplaneRepo.create(data)
      return airplane  
    } catch (error) {
        throw error
    }
} 

module.exports = {createAirplane}