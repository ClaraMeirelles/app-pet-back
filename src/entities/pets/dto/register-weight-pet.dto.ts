import { IsNotEmpty, IsString, IsUUID, IsNumber, IsDate } from "class-validator";

export class WeightPetIdDto {
    @IsUUID('all', { message: 'Invalid pet ID format' })
    id: string;
}

export class CreateWeightHistoryDto {
    @IsNotEmpty({ message: 'Weight is empty' })
    @IsNumber({}, { message: 'Weight must be a number' })
    weight: number;
}
