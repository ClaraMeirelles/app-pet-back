import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { UserDbModel } from "../model/User";
import { Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository {
    constructor(private readonly prisma: PrismaService){}

    async getUsers(){
        const res = await this.prisma.users.findMany()
        console.log(res)
        return res
    }

    async signup(createUserDto: Prisma.UsersCreateInput){
        await this.prisma.users.create({data: createUserDto})
    }

    async login(){

    }

    async updateUser(){

    }

    async deleteUser(){

    }
}
