const {StatusCodes} = require('http-status-codes')
const info = (req,res)=>{
   return res.status(StatusCodes.OK).json({msg:"ok"})
}

module.exports ={
    info
}