import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PetsRepository } from './repository/pets.repository';
import { Pet } from './model/Pets';
import { randomUUID } from 'crypto';
import { CreatePetDto } from './dto/create-pet.dto';
import { UsersRepository } from 'src/users/repository/users.repository';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PetsService {
    constructor(
        private readonly repository: PetsRepository,
        private readonly usersService: UsersService
    ) { }

    async getPets() {
        return await this.repository.getPets()
    }

    async registerPet(signupPetInput: CreatePetDto) {

        const id = randomUUID();

        const { ownerId, name, species, breed, age, size, color, weight, vaccinationStatus, vaccinationReminders, lastVaccinationDate, nextVaccinationDate, vetContact, medicalNotes, medicalHistory } = signupPetInput

        const user = await this.usersService.findUserById(ownerId)

        if (!user) throw new HttpException("User not found", HttpStatus.FORBIDDEN);

        const newPet = new Pet(
            id,
            ownerId,
            name,
            species,
            breed,
            age,
            size,
            color,
            weight,
            vaccinationStatus,
            vaccinationReminders,
            lastVaccinationDate,
            nextVaccinationDate,
            vetContact,
            medicalNotes,
            medicalHistory,
            new Date().toISOString(),
            new Date().toISOString()
        )

        return await this.repository.registerPet(newPet.petModel)
    }

    async updatePet(id: string){
        const pet = await this.repository.findPetById(id)
        console.log(pet)
    }
}
