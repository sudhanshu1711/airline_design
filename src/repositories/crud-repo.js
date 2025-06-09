const {logger} =require('../config/index.js')
class crudRepo {
    constructor(model){
        this.model=model
    }
    async create(data){
        try {
            const response = await this.model.create(data)
            return response
        } catch (error) {
                     logger.error('something went wrong while creating')
                     throw error
        }
    }
     async destroy(data){
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            })
            return response
        } catch (error) {
                     logger.error('something went wrong while destroying')
                     throw error
        }
    }
     async get(data){
        try {
            const response = await this.model.findByPk(data)
            return response
        } catch (error) {
                     logger.error('something went wrong while fetching')
                     throw error
        }
    }
     async getAll(data){
        try {
            const response = await this.model.findAll()
            return response
        } catch (error) {
                     logger.error('something went wrong while fetching')
                     throw error
        }
    }
     async update(id,data){
        try {
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            })
            return response
        } catch (error) {
                     logger.error('something went wrong while updating')
                     throw error
        }
    }
}
module.exports = crudRepo