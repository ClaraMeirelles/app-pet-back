import { Body, Controller, Post, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/signup.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @UsePipes(ValidationPipe)
    @Post('signup')
    signup(@Body() signupUserInput: CreateUserDto) {
        return this.authService.signup(signupUserInput)
    }

    @HttpCode(HttpStatus.OK)
    @UsePipes(ValidationPipe)
    @Post('login')
    login(@Body() signInDto: LoginDto) {
        return this.authService.login(signInDto.email, signInDto.password)
    }
}