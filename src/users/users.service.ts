import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { randomUUID } from 'node:crypto';
import { User } from './model/User';

@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository) { }

    async getUsers() {
        return await this.repository.getUsers()
    }

    async signup(signupUserDTO: CreateUserDto) {
        const { name, email, password, role, address, phoneNumber, profilePicture, description, lastLogin, status, preferences, petsCount } = signupUserDTO

        let createdAt = new Date().toISOString();
    
        const newUserDB = new User(
            randomUUID(),
            name,
            email,
            password,
            role,
            createdAt,
            address,
            phoneNumber,
            profilePicture,
            description,
            lastLogin,
            status,
            preferences,
            petsCount
        )
        console.log(newUserDB.userDbModel)


        return await this.repository.signup(newUserDB.userModel)
    }
}
