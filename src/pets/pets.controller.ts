import { Controller, Get, Request } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {
    constructor(
        private readonly petsService: PetsService
    ){}

    @Get('')
    async getPets(@Request() request){
        return await this.petsService.getPets()
    }
}
