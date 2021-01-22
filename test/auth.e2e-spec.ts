import * as request from 'supertest';
import { AuthCredentialsDto } from '../src/auth/dto/auth-credentials.dto';

describe('Auth (e2e)', () => {
    const app = 'http://localhost:3000';
  
    it('/ (GET)', () => {
      const user: AuthCredentialsDto = {
        username: 'testing',
        password: 'qo1029AHs*dHbC',
      };

      return request(app)
        .post('/auth/signup')
        .set('Accept', 'application/json')
        .send(user)
        .expect(201);
    });
  });