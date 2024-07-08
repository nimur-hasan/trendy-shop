import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'User email address',
    example: 'john.doe@example.com',
    required: true,
  })
  @IsNotEmpty({ message: 'Please enter the email' })
  @IsEmail({}, { message: 'Please enter a valid email' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'StrongPassword123!',
    required: true,
  })
  @IsNotEmpty({ message: 'Please enter the password' })
  @MinLength(4)
  password: string;
}
