const express = require('express')
const router = express.Router()

router.use('/', require('./modules/home'))
router.use('/shortener', require('./modules/shortener'))

module.exports = router