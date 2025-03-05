import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'I am login';
  }

  signin() {
    return 'I am  signin ';
  }
}
