"use strict";
// controllers/UserController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../services/userService");
const userService = new userService_1.UserService();
class UserController {
    async getAllUsers(req, res) {
        const users = await userService.getAllUsers();
        res.json(users);
    }
    async getUserById(req, res) {
        const user = await userService.getUserById(Number(req.params.id));
        res.json(user);
    }
    async createUser(req, res) {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    }
    async updateUser(req, res) {
        const updatedUser = await userService.updateUser(Number(req.params.id), req.body);
        res.json(updatedUser);
    }
    async deleteUser(req, res) {
        await userService.deleteUser(Number(req.params.id));
        res.status(204).end();
    }
}
exports.UserController = UserController;
