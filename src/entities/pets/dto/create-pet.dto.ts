import { IsNotEmpty, IsString, IsUUID, IsInt, IsNumber, IsDate } from "class-validator";

export class CreatePetDto {
    @IsNotEmpty({ message: 'Name is empty' })
    @IsString({ message: 'Name must be a string' })
    name: string;

    @IsNotEmpty({ message: 'Owner ID is empty' })
    @IsUUID('all', { message: 'Invalid owner ID format' })
    ownerId: string;

    @IsNotEmpty({ message: 'Species is empty' })
    @IsString({ message: 'Species must be a string' })
    species: string;

    @IsNotEmpty({ message: 'Breed is empty' })
    @IsString({ message: 'Breed must be a string' })
    breed: string;

    @IsNotEmpty({ message: 'Age is empty' })
    @IsInt({ message: 'Age must be an integer' })
    age: number;

    @IsNotEmpty({ message: 'Size is empty' })
    @IsNumber({}, { message: 'Size must be a number' })
    size: number;

    @IsNotEmpty({ message: 'Color is empty' })
    @IsString({ message: 'Color must be a string' })
    color: string;

    @IsNotEmpty({ message: 'Weight is empty' })
    @IsNumber({}, { message: 'Weight must be a number' })
    weight: number;

    @IsNotEmpty({ message: 'Vaccination status is empty' })
    @IsString({ message: 'Vaccination status must be a string' })
    vaccinationStatus: string;

    @IsNotEmpty({ message: 'Vaccination reminders is empty' })
    @IsString({ message: 'Vaccination reminders must be a string' })
    vaccinationReminders: string;

    @IsNotEmpty({ message: 'Last vaccination date is empty' })
    @IsString({ message: 'Invalid last vaccination date' })
    lastVaccinationDate: string;

    @IsNotEmpty({ message: 'Next vaccination date is empty' })
    @IsString({ message: 'Invalid next vaccination date' })
    nextVaccinationDate: string;

    @IsNotEmpty({ message: 'Vet contact is empty' })
    @IsString({ message: 'Vet contact must be a string' })
    vetContact: string;

    @IsNotEmpty({ message: 'Medical notes is empty' })
    @IsString({ message: 'Medical notes must be a string' })
    medicalNotes: string;

    @IsNotEmpty({ message: 'Medical history is empty' })
    @IsString({ message: 'Medical history must be a string' })
    medicalHistory: string;
}
