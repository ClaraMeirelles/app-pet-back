import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class GetVaccinesAdministeredDto {
    @IsNotEmpty({ message: 'Pet ID is empty' })
    @IsUUID('all', { message: 'Invalid pet ID UUID format' })
    id: string;
}