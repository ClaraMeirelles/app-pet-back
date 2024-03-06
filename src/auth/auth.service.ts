import { BadRequestException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dtos/signup.dto';
import { LoginOutput } from './dtos/login.dto';
import { randomUUID } from 'crypto';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { UsersService } from 'src/entities/users/users.service';
import { User, UserDbModel } from 'src/entities/users/model/User';

dotenv.config();

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    }

    async comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainTextPassword, hashedPassword);
    }

    async signup(signupUserInput: CreateUserDto) {
        const userExist: UserDbModel = await this.usersService.findUserByEmail(signupUserInput.email).catch(() => undefined);
        if (userExist) {
            throw new BadRequestException("Something bad happened", { cause: new Error(), description: "Email or Password invalid" });
        };

        const { name, email, password, role, address, phoneNumber, profilePicture, description, lastLogin, status, preferences } = signupUserInput;

        let createdAt = new Date().toISOString();

        const id = randomUUID();

        const hashedPassword = await this.hashPassword(password);

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
            0
        );

        const userCreated = await this.usersService.signup(newUserDB.userModel)

        console.log(userCreated)

        if (!userCreated) throw new Error("Internal error");

        const payload = { sub: id, email, role };

        return {
            acessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
        }
    }

    async login(email: string, pass: string): Promise<LoginOutput> {
        const user: UserDbModel = await this.usersService.findUserByEmail(email).catch(() => undefined);

        if (!user) throw new HttpException("Email or Password invalid", HttpStatus.FORBIDDEN);

        const isUser = await this.comparePasswords(pass, user.password);

        if (!isUser) throw new HttpException("Email or Password invalid", HttpStatus.FORBIDDEN);

        const payload = { sub: user.id, email: user.email, role: user.role };

        return {
            acessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
        };
    }
}