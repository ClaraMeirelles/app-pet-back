import { Body, Controller, Get, Post, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetsService } from './pets.service';
import { request } from 'http';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
    constructor(
        private readonly petsService: PetsService
    ) { }

    @Get('')
    async getPets(@Request() request) {
        return await this.petsService.getPets()
    }

    @UsePipes(ValidationPipe)
    @Post('')
    registerPet(@Body() registerPet: CreatePetDto) {
        return this.petsService.registePet(registerPet)
    }
}
