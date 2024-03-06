import { IsNotEmpty, IsUUID, IsString, IsDate, IsDateString } from 'class-validator';

export class CreateVaccinesAdministeredDto {
  @IsNotEmpty({ message: 'Vaccine ID is empty' })
  @IsUUID('all', { message: 'Invalid vaccine ID format' })
  vaccineId: string;

  @IsNotEmpty({ message: 'Pet ID is empty' })
  @IsUUID('all', { message: 'Invalid pet ID format' })
  petId: string;

  @IsNotEmpty({ message: 'Date administered is empty' })
  @IsDateString()
  dateAdministered: string;

  @IsNotEmpty({ message: 'Next dose due is empty' })
  @IsDateString()
  nextDoseDue: string;

  @IsNotEmpty({ message: 'Vet administered is empty' })
  @IsString({ message: 'Vet administered must be a string' })
  vetAdministered: string;

  @IsString({ message: 'Comments must be a string' })
  comments: string;
}
