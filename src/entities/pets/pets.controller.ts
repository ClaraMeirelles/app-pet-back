import { Body, Controller, Get, Post, Put, Request, Param, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdatePetDto, UpdatePetIdDto } from './dto/update-pet.dto';
import { GetVaccinesAdministeredDto } from './dto/get-vaccines-administered.dto';
import { VaccineAdministered } from './model/VaccinesAdministered';
import { CreateVaccinesAdministeredDto } from './dto/register-vaccines-administered.dto';
import { CreatePetExamDto } from './dto/register-pet-exam.dto';
import { CreateWeightHistoryDto, WeightPetIdDto } from './dto/register-weight-pet.dto';

@Controller('pets')
export class PetsController {
    constructor(
        private readonly petsService: PetsService
    ) { }

    // Pegar todos os pets
    @UseGuards(AuthGuard) // rota protegida
    @Get('')
    async getPets(@Request() request) {
        return await this.petsService.getPets()
    }

    // Registrar um novo pet
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard) // rota protegida
    @Post('')
    registerPet(@Body() registerPet: CreatePetDto) {
        return this.petsService.registerPet(registerPet)
    }

    // Atualizar o pet no banco de dados
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard) // rota protegida
    @Put(':id')
    updatePet(@Param(ValidationPipe) id: UpdatePetIdDto, @Body() updatePet: UpdatePetDto) {
        return this.petsService.updatePet(id, updatePet)
    }

    // Pegar vacinas aplicadas a um pet
    @UseGuards(AuthGuard) // rota protegida
    @Get(':id')
    getVaccines(@Param(ValidationPipe) id: GetVaccinesAdministeredDto) {
        return this.petsService.getVaccinesAdministered(id)
    }

    // Registra vacina administrada a um pet
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard) // rota protegida
    @Post('vaccines')
    registerVaccinesAdiministered(@Body() VaccineAdministered: CreateVaccinesAdministeredDto) {
        return this.petsService.registerVaccinesAdiministered(VaccineAdministered)
    }

    // Registra exame feito em um pet
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard) // rota protegida
    @Post('exams')
    registerPetExam(@Body() petExam: CreatePetExamDto) {
        return this.petsService.registerPetExam(petExam)
    }

    // Pega o historico de peso de um pet
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard) // rota protegida
    @Get('weight/:id')
    getWeightPet(@Param(ValidationPipe) id: WeightPetIdDto) {
        return this.petsService.getWeightHistory(id)
    }
}
