import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PetModel } from "../model/Pets";
import { VaccineAdministeredModel } from "../model/VaccinesAdministered";
import { PetExamModel } from "../model/PetExam";
import { WeightHistoryModel } from "../model/WeightPet";

@Injectable()
export class PetsRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async getPets() {
        return await this.prisma.pets.findMany()
    }

    async registerPet(createPetInput: PetModel): Promise<void> {
        await this.prisma.pets.create({ data: createPetInput })
    }

    async findPetById(id: string): Promise<PetModel | undefined> {
        return await this.prisma.pets.findFirst({ where: { id } })
    }

    async updatePet(updatePet: PetModel): Promise<void> {
        await this.prisma.pets.update({ where: { id: updatePet.id }, data: updatePet })
    }

    async findVaccineById(vaccineId: string): Promise<any[] | []> {
        return this.prisma.vaccines.findMany({ where: { id: vaccineId } })
    }

    async registerVaccinesAdministered(newVaccineAdministered: VaccineAdministeredModel): Promise<void> {
        await this.prisma.vaccinesAdministered.create({ data: newVaccineAdministered })
    }

    async getVaccinesAdministered(petId: string): Promise<VaccineAdministeredModel[] | []> {
        return await this.prisma.pets.findUnique({
            where: { id: petId },
            include: { VaccinesAdministered: true },
        }).then(pet => pet?.VaccinesAdministered || []);
    }

    async registerPetExamm(newPetExam: PetExamModel): Promise<void> {
        await this.prisma.petExams.create({ data: newPetExam })
    }

    async registerWeightPet(newWeightPet: WeightHistoryModel): Promise<void> {
        await this.prisma.weightHistory.create({ data: newWeightPet })
    }

    async getWeightHistory(id: string): Promise<WeightHistoryModel[]> {
        return await this.prisma.weightHistory.findMany({
            where: { petId: id }
        })
    }
}
