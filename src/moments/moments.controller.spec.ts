import { Test, TestingModule } from '@nestjs/testing';
import { MomentsController } from './moments.controller';

describe('Moments Controller', () => {
  let controller: MomentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MomentsController],
    }).compile();

    controller = module.get<MomentsController>(MomentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
