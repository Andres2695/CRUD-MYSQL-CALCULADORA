  
const { Router } = require('express');
const express = require('express');
const router = express.Router();

const operationController = require('../controller/CRUDController');
router.get('/', operationController.list);
router.post('/add',operationController.save);
router.get('/delete/:id',operationController.delete);
router.get('/update/:id',operationController.edit);
router.post('/update/:id',operationController.update);

module.exports = router;