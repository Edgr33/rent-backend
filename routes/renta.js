const express = require('express')
const router = express.Router() 

const controller = require('../controller/renta')

router.get('/renta', controller.renta)
router.get('/renta/:id', controller.getRenta)
router.post('/renta', controller.addRenta)
router.put('/renta/edit/:id', controller.updateRenta)
router.delete('/renta/:id', controller.deleteRenta)

module.exports = router