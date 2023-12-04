import { Body, Controller, Post, HttpCode, HttpStatus, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/signup.dto';

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
    login(@Body() signInDto: Record<string, any>) {
        return this.authService.login(signInDto.email, signInDto.password)
    }
}