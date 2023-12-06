import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetsService } from './pets.service';
import { PetsRepository } from './repository/pets.repository';

@Module({
    controllers: [PetsController],
    providers: [PrismaService, PetsService, PetsRepository],
    exports: [PetsService]
})
export class PetsModule {}
