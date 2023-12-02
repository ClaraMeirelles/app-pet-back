import { IsString } from "class-validator";

export class LoginDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
}

export interface LoginOutput {
    acessToken : string
}