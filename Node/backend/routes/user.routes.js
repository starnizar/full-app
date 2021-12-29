const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller')

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getOneUser);
router.get('/user/', userController.getUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.createUser);

module.exports = router;