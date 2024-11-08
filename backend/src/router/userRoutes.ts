// routes/UserRoutes.ts

const express = require('express');
import { UserController } from '../controller/userController';

const router = express.Router();
const userController = new UserController();

router.get('/users', userController.getAllUsers.bind(userController));
router.get('/users/:id', userController.getUserById.bind(userController));
router.post('/users', userController.createUser.bind(userController));
router.put('/users/:id', userController.updateUser.bind(userController));
router.delete('/users/:id', userController.deleteUser.bind(userController));

export default router;
