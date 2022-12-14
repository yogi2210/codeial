const express = require('express')
const router = express.Router()

const contactController = require('../controllers/contact_controller')

router.get('/phone', contactController.phone)
router.get('/email', contactController.email)


module.exports = router