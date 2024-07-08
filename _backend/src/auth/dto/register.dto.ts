import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
    required: true,
  })
  @IsNotEmpty({ message: 'Please enter the name' })
  @IsString({ message: 'Please enter the valid name' })
  name: string;


  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
    required: true,
  })
  @IsNotEmpty({ message: 'Please enter the email' })
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;


  @ApiProperty({
    description: 'User contact number',
    example: '+1 123-456-7890',
    required: true,
  })
  @IsNotEmpty({ message: 'Please enter the contact number' })
  @IsMobilePhone()
  contact_number: string;


  @ApiProperty({
    description: 'User password',
    example: 'StrongPassword123!',
    required: true,
  })
  @IsNotEmpty({ message: 'Please enter the password' })
  @MinLength(4)
  password: string;
}
