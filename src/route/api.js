const express = require('express');

const CrudController = require('../controller/CrudController');

const router = express.Router();

router.post('/create', CrudController.Create)
router.get('/read', CrudController.Read)
router.get('/readById/:id', CrudController.ReadById)
router.post('/update/:id', CrudController.Update)
router.get('/delete/:id', CrudController.Delete)

module.exports = router;