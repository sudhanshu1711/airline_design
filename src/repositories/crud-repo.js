const { StatusCodes } = require('http-status-codes')
const {logger} =require('../config/index.js')
const AppError = require('../utils/errors/app-error.js')
class crudRepo {
    constructor(model){
        this.model=model
    }
    async create(data){
            const response = await this.model.create(data)
            return response
    }
     async destroy(data){
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            })
             if(!response){
                throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
            }
            return response
    }
     async get(data){
            const response = await this.model.findByPk(data)
            if(!response){
                throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
            }
            return response
    }
     async getAll(){
            const response = await this.model.findAll()
            return response
    }
    async update(id, data) {
          const [updated] = await this.model.update(data, {
              where: { id: id }
      });

      if (updated === 0) {
        throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
        }

      const updatedAirplane = await this.model.findByPk(id);
      return updatedAirplane;
}

}
module.exports = crudRepo