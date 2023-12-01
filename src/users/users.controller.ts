import { Controller, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get('users')
    async getUsers(@Request()request){
        return await this.usersService.getUsers()
    }
}
