import { Body, Controller, Get, Post, Put, Request, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetsService } from './pets.service';
import { request } from 'http';
import { CreatePetDto } from './dto/create-pet.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
    constructor(
        private readonly petsService: PetsService
    ) { }

    @UseGuards(AuthGuard)
    @Get('')
    async getPets(@Request() request) {
        return await this.petsService.getPets()
    }

    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @Post('')
    registerPet(@Body() registerPet: CreatePetDto) {
        return this.petsService.registerPet(registerPet)
    }

    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @Put(':id')
    updatePet(@Param('id') id: string, @Body() updatePet: UpdatePetDto) {
        return this.petsService.updatePet(id, updatePet)
    }
}
