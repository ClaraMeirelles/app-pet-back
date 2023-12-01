import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('/')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get('')
    async getUsers(@Request() request) {
        return await this.usersService.getUsers()
    }

    @Post('')
    async signup(@Body() signupUserDTO: CreateUserDto){
        return await this.usersService.signup(signupUserDTO)
    }
}
