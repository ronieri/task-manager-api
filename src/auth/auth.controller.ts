import { Body, Controller, Logger, Post, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private logger = new Logger('TasksController');

  constructor(private authService: AuthService) {
    //
  }

  @Post('signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    this.logger.verbose(`User "${authCredentialsDto.username}" being registered.`);
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    this.logger.verbose(`User "${authCredentialsDto.username}" being logged in.`);
    return this.authService.signIn(authCredentialsDto);
  }
}
