import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { Pet, PetModel } from "../model/Pets";
import { VaccineAdministeredModel } from "../model/VaccinesAdministered";

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
        await this.prisma.pets.update({where: {id: updatePet.id}, data: updatePet})
    }

    async getVaccines(petId: string): Promise<VaccineAdministeredModel[] | []>{
        return this.prisma.vaccinesAdministered.findMany({where: {petId}})
    }
}
