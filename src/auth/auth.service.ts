import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User, UserDbModel } from 'src/users/model/User';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dtos/signup.dto';
import { LoginOutput } from './dtos/login.dto';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = Number(process.env.BCRYPT_COST)
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword
    }

    async comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainTextPassword, hashedPassword);
    }

    async signup(signupUserInput: CreateUserDto) {
        const userExist: UserDbModel = await this.usersService.findUserByEmail(signupUserInput.email).catch(() => undefined)
        if (userExist) {
            throw new Error("Email exist")
        }

        const { name, email, password, role, address, phoneNumber, profilePicture, description, lastLogin, status, preferences, petsCount } = signupUserInput

        let createdAt = new Date().toISOString();

        const id = randomUUID()

        const hashedPassword = await this.hashPassword(password)

        const newUserDB = new User(
            id,
            name,
            email,
            hashedPassword,
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
        // console.log(newUserDB.userDbModel)

        const userCreated = await this.usersService.signup(newUserDB.userModel)

        if (!userCreated) {
            throw new Error("Error created user")
        }

        const payload = { sub: id, email, role };
        return {
            acessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
        }
    }

    async login(email: string, pass: string): Promise<LoginOutput> {
        const user: UserDbModel = await this.usersService.findUserByEmail(email).catch(() => undefined);

        if (!user) {
            throw Error("Email or Password invalid")
        }

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, email: user.email, role: user.role };

        return {
            acessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
        }
    }
}

// return {
//     access_token: await this.jwtService.signAsync(payload),
// };