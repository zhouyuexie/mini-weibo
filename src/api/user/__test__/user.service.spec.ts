import { Test, TestingModule } from '@nestjs/testing';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user.service';
import db from '../../../../db/user.db';
import { AuthConfig } from '../../../../config/auth.config';
import { Role } from '../../../auth/Role';
import { BadRequestException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should success when invoke register', () => {
    const username = 'username';
    const password = 'password';

    const { id, token } = service.register(username, password);

    const user = db.find(user => user.id === id);
    const userIfno = jwt.verify(token, AuthConfig.secret);
    expect(token).toBeDefined();
    expect(userIfno).toMatchObject({
      username,
      roles: [Role.USER],
      id,
    });
    expect(user.id).toEqual(id);
  });

  it('should throw bad request when username is existed', () => {
    expect(() => {
      service.register('test', 'password');
    }).toThrowError(new BadRequestException('username is existed'));
  });
});
