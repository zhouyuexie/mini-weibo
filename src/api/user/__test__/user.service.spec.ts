import { Test, TestingModule } from '@nestjs/testing';
import * as jwt from 'jsonwebtoken';
import { UserService } from '../user.service';
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

    const { token } = service.register(username, password);

    const userIfno = jwt.verify(token, AuthConfig.secret);
    expect(token).toBeDefined();
    expect(userIfno).toMatchObject({
      username,
      roles: [Role.USER],
    });
  });

  it('should throw bad request when username is existed', () => {
    expect(() => {
      service.register('test', 'password');
    }).toThrowError(new BadRequestException('username is existed'));
  });

  it('should throw bad request when username is not exist', () => {
    expect(() => {
      service.login('not find', 'password');
    }).toThrowError(new BadRequestException('username incorrect'));
  });

  it('should throw bad request when password is incorrect', () => {
    expect(() => {
      service.login('test', 'incorrect');
    }).toThrowError(new BadRequestException('password incorrect'));
  });

  it('should login success', () => {
    const { token } = service.login('test', 'encode password');

    expect(token).toBeDefined();
  });
});
