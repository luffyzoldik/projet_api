import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const USER = { username: 'marcel', password: 'azerty' };

@Injectable()
export class AuthService {

  async validateUser(username: string, pass: string): Promise<any> {
    if (username === USER.username && pass === USER.password) {

      const { password, ...result } = USER; 
      return result;
    }
    return null;
  }

  
  async login(user: any) {
   

    if (!user) {
        throw new UnauthorizedException('Identifiants invalides');
    }
    return {
      access_token: 'I am a super secret key',
    };
  }
}