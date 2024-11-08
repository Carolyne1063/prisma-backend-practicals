"use strict";
// routes/UserRoutes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const userController_1 = require("../controller/userController");
const router = express.Router();
const userController = new userController_1.UserController();
router.get('/users', userController.getAllUsers.bind(userController));
router.get('/users/:id', userController.getUserById.bind(userController));
router.post('/users', userController.createUser.bind(userController));
router.put('/users/:id', userController.updateUser.bind(userController));
router.delete('/users/:id', userController.deleteUser.bind(userController));
exports.default = router;
