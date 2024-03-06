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
import { CreateWeightHistoryDto, WeightPetIdDto } from './dto/register-weight-pet.dto';
import { Weight, WeightHistoryModel } from './model/WeightPet';

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
        const idWeight = randomUUID();

        const { ownerId, name, species, breed, age, size, color, weight, vaccinationStatus, vaccinationReminders, lastVaccinationDate, nextVaccinationDate, vetContact, medicalNotes, medicalHistory } = signupPetInput

        const user = await this.usersService.findUserById(ownerId)

        if (!user) throw new HttpException("User not found", HttpStatus.FORBIDDEN);

        const currentDate = new Date().toISOString()

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
            currentDate,
            currentDate
        )

        const newWeight = new Weight(
            idWeight,
            id,
            weight,
            currentDate
        )

        await this.repository.registerPet(newPet.petModel)
        await this.repository.registerWeightPet(newWeight.weightHistoryModel)
    }

    async updatePet({ id }: UpdatePetIdDto, updatePet: UpdatePetDto): Promise<void> {
        if (!id) throw new HttpException("Id invalid", HttpStatus.BAD_REQUEST);

        const { name, ownerId, species, breed, age, size, color, weight, vaccinationStatus, vaccinationReminders, lastVaccinationDate, nextVaccinationDate, vetContact, medicalNotes, medicalHistory } = updatePet

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

        pet.name = name ?? pet.name;
        pet.ownerId = ownerId ?? pet.ownerId;
        pet.species = species ?? pet.species;
        pet.breed = breed ?? pet.breed;
        pet.age = age ?? pet.age;
        pet.size = size ?? pet.size;
        pet.color = color ?? pet.color;
        pet.weight = weight ?? pet.weight;
        pet.vaccinationStatus = vaccinationStatus ?? pet.vaccinationStatus;
        pet.vaccinationReminders = vaccinationReminders ?? pet.vaccinationReminders;
        pet.lastVaccinationDate = lastVaccinationDate ?? pet.lastVaccinationDate as string;
        pet.nextVaccinationDate = nextVaccinationDate ?? pet.nextVaccinationDate as string;
        pet.vetContact = vetContact ?? pet.vetContact;
        pet.medicalNotes = medicalNotes ?? pet.medicalNotes;
        pet.medicalHistory = medicalHistory ?? pet.medicalHistory;

        pet.updatedAt = new Date().toISOString();

        if (weight) {
            const idWeight = randomUUID();
            const newWeight = new Weight(
                idWeight,
                id,
                weight,
                new Date().toISOString()
            )

            await this.repository.registerWeightPet(newWeight.weightHistoryModel)
        }

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

    async registerWeightPet(idPet: WeightPetIdDto, weightPet: CreateWeightHistoryDto) {
        const { weight } = weightPet
        const id = randomUUID();
        const petId = idPet.toString()

        const petExist = await this.repository.findPetById(petId)

        if (!petExist) throw new HttpException("Pet id not found", HttpStatus.NOT_FOUND);

        const newWeight = new Weight(
            id,
            petId,
            weight,
            new Date().toISOString()
        )

        await this.repository.registerWeightPet(newWeight.weightHistoryModel)
    }

    async getWeightHistory({ id }: WeightPetIdDto): Promise<WeightHistoryModel[]> {
        const petId = id.toString()

        const petExist = await this.repository.findPetById(petId)

        if (!petExist) throw new HttpException("Pet id not found", HttpStatus.NOT_FOUND);

        const res = await this.repository.getWeightHistory(petId)

        return res
    }
}
