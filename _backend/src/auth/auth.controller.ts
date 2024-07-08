import { Body, Controller, Get, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guard/auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(private AuthService: AuthService) {}

  @Post('/sign-up')
  @ApiOperation({ summary: 'User registration' })
  registration(@Body() body: RegisterDto) {
    return this.AuthService.register(body);
  }

  @Post('/login')
  @ApiOperation({
    summary: 'User login with email/contact_number) and password',
  })
  login(@Body() body: LoginDto) {
    return this.AuthService.login(body);
  }

  // @Patch('/forgot-password')
  // @ApiOperation({ summary: 'Forgot password (email)' })
  // async forgotPassword(@Body() body: ForgotPwdDto) {
  //   return await this.AuthService.forgotPassword(body.email);
  // }

  // @Patch('/send-otp')
  // @ApiOperation({ summary: 'Send Otp (email)' })
  // async sendOtp(@Body() body: ForgotPwdDto) {
  //   return await this.AuthService.forgotPassword(body.email);
  // }

  // @Post('/verify-otp')
  // @ApiOperation({ summary: 'confirm otp (email, otp)' })
  // async confirmOtp(@Body() body: ConfirmOtpDto) {
  //   return await this.AuthService.confirmOtp(body.email, body.otp);
  // }

  // @Patch('/set-password')
  // @ApiOperation({ summary: 'Set password (token, password)' })
  // async setPassword(@Body() body: SetPwdDto) {
  //   return await this.AuthService.setPassword(body.token, body.password);
  // }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('/check-token-validation')
  checkTokenValidation(@Request() req) {
    return req.user;
  }
}