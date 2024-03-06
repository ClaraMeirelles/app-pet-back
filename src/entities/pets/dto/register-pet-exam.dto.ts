import { IsNotEmpty, IsUUID, IsDate, IsString, IsDateString } from 'class-validator';

export class CreatePetExamDto {
  @IsNotEmpty({ message: 'Pet ID is empty' })
  @IsUUID('all', { message: 'Invalid pet ID format' })
  petId: string;

  @IsNotEmpty({ message: 'Exame ID is empty' })
  @IsUUID('all', { message: 'Invalid exame ID format' })
  exameId: string;

  @IsNotEmpty({ message: 'Date performed is empty' })
  @IsDateString()
  datePerformed: string;

  @IsNotEmpty({ message: 'Vet performed is empty' })
  @IsString({ message: 'Vet performed must be a string' })
  vetPerformed: string;

  @IsNotEmpty({ message: 'Contact vet is empty' })
  @IsString({ message: 'Contact vet must be a string' })
  contactVet: string;

  @IsNotEmpty({ message: 'Results is empty' })
  @IsString({ message: 'Results must be a string' })
  results: string;

  @IsString({ message: 'Comments must be a string' })
  comments: string;
}
