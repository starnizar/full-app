const Router = require('express');
const router = new Router();
const userController = require('../controllers/user.controller')

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getOneUser);
router.get('/users/', userController.getUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;