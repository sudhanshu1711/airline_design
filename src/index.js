const express = require('express')
const {PORT,logger} = require('./config/index.js')
const apiRoutes=require('./routes/index.js')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',apiRoutes)

app.listen(PORT,()=>{
    console.log(`server created at ${PORT}`)
})
