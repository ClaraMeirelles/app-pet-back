import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository){}
    
    async getUsers(){
        return "usuário"
    }
}
