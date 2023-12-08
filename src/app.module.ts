import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './entities/users/users.module';
import { PetsModule } from './entities/pets/pets.module';
import { UsersController } from './entities/users/users.controller';
import { PetsController } from './entities/pets/pets.controller';


@Module({
  imports: [UsersModule, AuthModule, PetsModule],
  controllers: [UsersController, PetsController],
  providers: [PrismaService],
})
export class AppModule {}
