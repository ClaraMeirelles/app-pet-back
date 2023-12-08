import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

import * as dotenv from 'dotenv';
import { UsersModule } from 'src/entities/users/users.module';
dotenv.config();

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: `${process.env.JWT_EXPIRES_IN}` },
    }),
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}