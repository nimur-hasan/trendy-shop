import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const { password } = data;

    const salt = await bcrypt.genSalt();

    const hash = await bcrypt.hash(password, salt);

    data.password = hash;

    return await this.userService.create(data);
  }

  async login(data: LoginDto) {
    console.log('JWT: ', process.env.JWT_SECRET);

    const { email, password } = data;

    const user = await this.userService.findOne({ email });

    if (!user) {
      return { error: 'User not found' };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { error: 'Invalid password' };
    }

    const payload = { id: user.id };

    const generateToken = await this.jwtService.sign(payload);

    return {
      success: true,
      token: generateToken,
    };
  }
}
