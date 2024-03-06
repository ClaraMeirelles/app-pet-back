import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserModel } from "../model/User";
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async getUsers(): Promise<UserModel[] | undefined> {
        return await this.prisma.users.findMany()
    }

    async findUserById(id: string): Promise<UserModel | undefined> {
        return await this.prisma.users.findFirst({ where: { id } })
    }

    async findUserByEmail(email: string): Promise<UserModel | undefined> {
        return await this.prisma.users.findFirst({ where: { email } })
    }

    async signup(createUserInput: Prisma.UsersCreateInput): Promise<UserModel | undefined> {
        return await this.prisma.users.create({ data: createUserInput })
    }

    async login() {

    }

    async updateUser() {

    }

    async deleteUser() {

    }
}
