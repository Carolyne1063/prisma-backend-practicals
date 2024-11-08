

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class UserService {
  async getAllUsers() {
    return prisma.user.findMany();
  }

  async getUserById(id: number) {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(data: { email: string; name?: string }) {
    return prisma.user.create({
      data,
    });
  }

  async updateUser(id: number, data: { email?: string; name?: string }) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    return prisma.user.delete({
      where: { id },
    });
  }
}
