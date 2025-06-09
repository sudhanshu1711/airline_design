const express = require('express')
const {infoController} = require('../../controllers/index.js')
const airplaneRoutes = require('./airplane-routes.js')

const router = express.Router()

router.use('/airplanes',airplaneRoutes)
router.get('/info',infoController.info)

module.exports = router