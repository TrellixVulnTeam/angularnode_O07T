const { response } = require('express');

const router = require('express').Router();

// import controllers
const UserController = require('./controllers/UserController')

router.post('/create',  UserController.create)

router.post('/findAllDevice',  UserController.findAllDevice)

router.post('/findAllCategory',  UserController.findAllCategory)

router.post('/findOneDevice',  UserController.findOneDevice)

router.post('/findOneCategory',  UserController.findOneCategory)

router.post('/insertDevice',  UserController.insertDevice)

router.post('/insertCategory',  UserController.insertCategory)

router.post('/deleteDevice',  UserController.deleteDevice)

router.post('/deleteCategory',  UserController.deleteCategory)

module.exports = router