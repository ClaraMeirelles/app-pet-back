import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PetsRepository } from './repository/pets.repository';
import { Pet, PetModel } from './model/Pets';
import { randomUUID } from 'crypto';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto, UpdatePetIdDto } from './dto/update-pet.dto';
import { UsersService } from '../users/users.service';
import { GetVaccinesAdministeredDto } from './dto/get-vaccines-administered.dto';
import { PetVaccinesAdministered, VaccineAdministered, VaccineAdministeredModel } from './model/VaccinesAdministered';
import { CreateVaccinesAdministeredDto } from './dto/register-vaccines-administered.dto';
import { CreatePetExamDto } from './dto/register-pet-exam.dto';
import { PetExam } from './model/PetExam';

@Injectable()
export class PetsService {
    constructor(
        private readonly repository: PetsRepository,
        private readonly usersService: UsersService
    ) { }

    async getPets(): Promise<PetModel[] | []> {
        return await this.repository.getPets()
    }

    async registerPet(signupPetInput: CreatePetDto): Promise<void> {

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

    async updatePet({ id }: UpdatePetIdDto, updatePet: UpdatePetDto): Promise<void> {
        if (!id) throw new HttpException("Id invalid", HttpStatus.BAD_REQUEST);

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

        await this.repository.updatePet(pet.petModel)
    }

    async getVaccinesAdministered({ id }: GetVaccinesAdministeredDto): Promise<PetVaccinesAdministered | []> {
        const pet = await this.repository.findPetById(id)

        if (!pet) throw new HttpException("Pet not found", HttpStatus.NOT_FOUND);

        const vaccines = await this.repository.getVaccinesAdministered(id)

        const res = {
            vaccinesAdministered: vaccines
        }

        return res
    }

    async registerVaccinesAdiministered(dto: CreateVaccinesAdministeredDto): Promise<void> {
        const { vaccineId, petId, dateAdministered, nextDoseDue, vetAdministered, comments } = dto

        const id = randomUUID();

        const [vaccineExist] = await this.repository.findVaccineById(vaccineId)

        if (!vaccineExist) throw new HttpException("Vaccine id not found", HttpStatus.NOT_FOUND);

        const petExist = await this.repository.findPetById(petId)

        if (!petExist) throw new HttpException("Pet id not found", HttpStatus.NOT_FOUND);

        const vaccineAdministered = new VaccineAdministered(
            id,
            vaccineId,
            petId,
            dateAdministered,
            nextDoseDue,
            vetAdministered,
            comments
        )

        await this.repository.registerVaccinesAdministered(vaccineAdministered.vaccineAdministeredModel)
    }

    async registerPetExam(dto: CreatePetExamDto): Promise<void> {
        const { petId, exameId, datePerformed, vetPerformed, contactVet, results, comments } = dto

        const id = randomUUID();

        const [examExist] = await this.repository.findVaccineById(exameId)

        if (!examExist) throw new HttpException("Vaccine id not found", HttpStatus.NOT_FOUND);

        const petExist = await this.repository.findPetById(petId)

        if (!petExist) throw new HttpException("Pet id not found", HttpStatus.NOT_FOUND);
        
        const petExam = new PetExam(
            id,
            petId,
            exameId,
            datePerformed,
            vetPerformed,
            contactVet,
            results,
            comments
        )

        await this.repository.registerPetExamm(petExam.petExamModel)
    }
}
