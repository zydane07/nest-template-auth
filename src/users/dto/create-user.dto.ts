import { Role } from '@prisma/client';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(3)
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'name must contain only letters and spaces',
  })
  name: string;

  @MinLength(5)
  password: string;

  @IsEnum(Role)
  role?: Role;
}
