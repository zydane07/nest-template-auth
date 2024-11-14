import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtServices: JwtService,
  ) {}

  async logIn(loginDto: LoginDto) {
    const user = await this.usersService.findOne(loginDto.email);

    if (!user) throw new NotFoundException('User not found');

    const ispasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!ispasswordValid) throw new UnauthorizedException('Invalid password');

    const token = await this.jwtServices.signAsync({
      id: user.id,
      role: user.role,
      email: user.email,
      name: user.name,
    });

    return { token, role: user.role, name: user.name };
  }
}
