// controllers/UserController.ts

import { UserService } from "../services/userService";
import { Request, Response } from 'express';

const userService = new UserService();

export class UserController {
  async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const user = await userService.getUserById(Number(req.params.id));
    res.json(user);
  }

  async createUser(req: Request, res: Response) {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const updatedUser = await userService.updateUser(Number(req.params.id), req.body);
    res.json(updatedUser);
  }

  async deleteUser(req: Request, res: Response) {
    await userService.deleteUser(Number(req.params.id));
    res.status(204).end();
  }
}
