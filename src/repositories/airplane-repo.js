const crudRepo = require('./crud-repo.js')
const {airplane}= require('../models/index.js')

class AirplaneRepo extends crudRepo {
    constructor(){
      super(airplane)
    }
}

module.exports = AirplaneRepo