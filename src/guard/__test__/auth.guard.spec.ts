import { AuthGuard } from '../auth.guard';
import { Test, TestingModule } from '@nestjs/testing';
import { APP_GUARD } from '@nestjs/core';

describe('AuthGuardGuard', () => {
  let guard: AuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
    }).compile();

    guard = module.get<AuthGuard>(AuthGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
