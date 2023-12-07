import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { PetModel } from "../model/Pets";

@Injectable()
export class PetsRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async getPets() {
        return await this.prisma.pets.findMany()
    }

    async registerPet(createPetInput: PetModel): Promise<void> {
        await this.prisma.pets.create({data: createPetInput})
    }

    async findPetById(id: string){
        return await this.prisma.pets.findFirst({where: {id}})
    }
}
