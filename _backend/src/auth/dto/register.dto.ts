import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Min,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Please enter the name' })
  @IsString({ message: 'Please enter the valid name' })
  name: string;

  @IsNotEmpty({ message: 'Please enter the email' })
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @IsNotEmpty({ message: 'Please enter the contact number' })
  @IsMobilePhone()
  contact_number: string;

  @IsNotEmpty({ message: 'Please enter the password' })
  @MinLength(4)
  password: string;
}
