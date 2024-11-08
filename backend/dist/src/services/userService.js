"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserService {
    async getAllUsers() {
        return prisma.user.findMany();
    }
    async getUserById(id) {
        return prisma.user.findUnique({
            where: { id },
        });
    }
    async createUser(data) {
        return prisma.user.create({
            data,
        });
    }
    async updateUser(id, data) {
        return prisma.user.update({
            where: { id },
            data,
        });
    }
    async deleteUser(id) {
        return prisma.user.delete({
            where: { id },
        });
    }
}
exports.UserService = UserService;
