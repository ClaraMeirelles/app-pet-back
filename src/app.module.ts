import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { PetsModule } from './pets/pets.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule, AuthModule, PetsModule],
  controllers: [UsersController, PetsController],
  providers: [PrismaService],
})
export class AppModule {}
