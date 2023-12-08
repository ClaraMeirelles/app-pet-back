import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PetsRepository } from './repository/pets.repository';
import { Pet } from './model/Pets';
import { randomUUID } from 'crypto';
import { CreatePetDto } from './dto/create-pet.dto';
import { UsersRepository } from 'src/users/repository/users.repository';
import { UsersService } from 'src/users/users.service';
import { UpdatePetDto } from './dto/update-pet.dto';

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

    async updatePet(id: string, updatePet: UpdatePetDto) {
        const petDb = await this.repository.findPetById(id)

        if (!petDb) throw new HttpException("Pet not found", HttpStatus.NOT_FOUND);

        const pet = new Pet(
            petDb.id,
            petDb.ownerId,
            petDb.name,
            petDb.species,
            petDb.breed,
            petDb.age,
            petDb.size,
            petDb.color,
            petDb.weight,
            petDb.vaccinationStatus,
            petDb.vaccinationReminders,
            petDb.lastVaccinationDate,
            petDb.nextVaccinationDate,
            petDb.vetContact,
            petDb.medicalNotes,
            petDb.medicalHistory,
            petDb.createdAt,
            petDb.updatedAt
        )

        pet.name = updatePet.name ?? pet.name;
        pet.ownerId = updatePet.ownerId ?? pet.ownerId;
        pet.species = updatePet.species ?? pet.species;
        pet.breed = updatePet.breed ?? pet.breed;
        pet.age = updatePet.age ?? pet.age;
        pet.size = updatePet.size ?? pet.size;
        pet.color = updatePet.color ?? pet.color;
        pet.weight = updatePet.weight ?? pet.weight;
        pet.vaccinationStatus = updatePet.vaccinationStatus ?? pet.vaccinationStatus;
        pet.vaccinationReminders = updatePet.vaccinationReminders ?? pet.vaccinationReminders;
        pet.lastVaccinationDate = updatePet.lastVaccinationDate ?? pet.lastVaccinationDate as string;
        pet.nextVaccinationDate = updatePet.nextVaccinationDate ?? pet.nextVaccinationDate as string;
        pet.vetContact = updatePet.vetContact ?? pet.vetContact;
        pet.medicalNotes = updatePet.medicalNotes ?? pet.medicalNotes;
        pet.medicalHistory = updatePet.medicalHistory ?? pet.medicalHistory;

        pet.updatedAt = new Date().toISOString();

        return await this.repository.updatePet(pet.petModel)
    }
}
