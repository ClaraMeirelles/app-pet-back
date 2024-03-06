import { IsNotEmpty, IsString, IsEmail, IsUUID, IsInt, MinLength, IsEnum } from "class-validator";

enum UserRole {
  NORMAL = 'normal',
  ADMIN = 'admin',
}

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Name is empty'
  })
  @IsString({
    message: 'Name must be a string'
  })
  name: string;

  @IsNotEmpty({ message: 'Email is empty' })
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is empty' })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;

  @IsNotEmpty({ message: 'Role is empty' })
  @IsString({ message: 'Role must be a string' })
  @IsEnum(UserRole, { message: 'Invalid role' })
  role: UserRole;

  // Adicione os validadores apropriados para as outras propriedades da tabela de usuário
  @IsNotEmpty({ message: 'Address is empty' })
  @IsString({ message: 'Address must be a string' })
  address: string;

  @IsNotEmpty({ message: 'Phone number is empty' })
  @IsInt({ message: 'Phone number must be an integer' })
  phoneNumber: number;

  @IsNotEmpty({ message: 'Profile picture is empty' })
  @IsString({ message: 'Profile picture must be a string' })
  profilePicture: string;

  @IsNotEmpty({ message: 'Description is empty' })
  @IsString({ message: 'Description must be a string' })
  description: string;

  @IsNotEmpty({ message: 'Last login is empty' })
  @IsString({ message: 'Last login must be a string' })
  lastLogin: string;

  @IsNotEmpty({ message: 'Status is empty' })
  @IsString({ message: 'Status must be a string' })
  status: string;

  @IsNotEmpty({ message: 'Preferences is empty' })
  @IsString({ message: 'Preferences must be a string' })
  preferences: string;

}
