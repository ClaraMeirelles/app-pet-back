import { IsString, IsUUID, IsInt, IsNumber, IsDate, IsOptional, IsNotEmpty } from "class-validator";

export class UpdatePetIdDto {
    @IsUUID('all', { message: 'Invalid pet ID format' })
    id: string;
}

export class UpdatePetDto {
    @IsOptional()
    @IsString({ message: 'Name must be a string' })
    name?: string;

    @IsOptional()
    @IsUUID('all', { message: 'Invalid owner ID format' })
    ownerId?: string;

    @IsOptional()
    @IsString({ message: 'Species must be a string' })
    species?: string;

    @IsOptional()
    @IsString({ message: 'Breed must be a string' })
    breed?: string;

    @IsOptional()
    @IsInt({ message: 'Age must be an integer' })
    age?: number;

    @IsOptional()
    @IsNumber({}, { message: 'Size must be a number' })
    size?: number;

    @IsOptional()
    @IsString({ message: 'Color must be a string' })
    color?: string;

    @IsOptional()
    @IsNumber({}, { message: 'Weight must be a number' })
    weight?: number;

    @IsOptional()
    @IsString({ message: 'Vaccination status must be a string' })
    vaccinationStatus?: string;

    @IsOptional()
    @IsString({ message: 'Vaccination reminders must be a string' })
    vaccinationReminders?: string;

    @IsOptional()
    @IsString({ message: 'Invalid last vaccination date' })
    lastVaccinationDate?: string;

    @IsOptional()
    @IsString({ message: 'Invalid next vaccination date' })
    nextVaccinationDate?: string;

    @IsOptional()
    @IsString({ message: 'Vet contact must be a string' })
    vetContact?: string;

    @IsOptional()
    @IsString({ message: 'Medical notes must be a string' })
    medicalNotes?: string;

    @IsOptional()
    @IsString({ message: 'Medical history must be a string' })
    medicalHistory?: string;
}
