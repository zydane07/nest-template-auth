import { IsEmail, MinLength } from 'class-validator';

export class LoginDto {
  @MinLength(2)
  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;
}
