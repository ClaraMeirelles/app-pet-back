import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { UserModel } from './model/User';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(
        private readonly repository: UsersRepository
    ) { }

    async getUsers() {
        return await this.repository.getUsers()
    }

    async findUserByEmail(email: string): Promise<UserModel | undefined> {
        const user = this.repository.findUserByEmail(email)

        return user
    }

    async findUserById(id: string): Promise<UserModel | undefined> {
        const user = this.repository.findUserById(id)

        return user
    }


    async signup(signupUserDTO: Prisma.UsersCreateInput): Promise<boolean | undefined> {
        return await this.repository.signup(signupUserDTO).catch(() => undefined).catch((e) => false)
    }

   
}
