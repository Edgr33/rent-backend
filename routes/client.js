const express = require('express')
const router = express.Router() 

const controller = require('../controller/client')

router.get('/clients', controller.clients)
router.get('/clients/:id', controller.getClient)
router.post('/clients', controller.addClient)
router.put('/clients/edit/:id', controller.updateClient)
router.delete('/clients/:id', controller.deleteClient)

module.exports = router