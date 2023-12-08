import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PetsService } from './pets.service';
import { PetsRepository } from './repository/pets.repository';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [UsersModule],
    providers: [PrismaService, PetsService, PetsRepository],
    controllers: [PetsController],
    exports: [PetsService]
})
export class PetsModule { }
