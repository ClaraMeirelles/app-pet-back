import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PetsRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async getPets() {
        return await this.prisma.pets.findMany()
    }
}
