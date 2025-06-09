const dotenv = require('dotenv')
const {format,transports,createLogger} =require('winston')
const {combine,timestamp,printf} = format

dotenv.config()

 const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}:${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
    myFormat
  ),
  transports: [new transports.Console(),
   new transports.File({filename:'combine.log'})
  ]
});

module.exports={
    PORT:process.env.PORT,
    logger
}