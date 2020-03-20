import { Test, TestingModule } from '@nestjs/testing';
import { MomentsController } from './moments.controller';
import { MomentsService } from './moments.service';

describe('Moments Controller', () => {
  let controller: MomentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MomentsController],
      providers: [MomentsService],
    }).compile();

    controller = module.get<MomentsController>(MomentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get list success without query params', () => {
    const list = controller.getList();

    expect(list).toBeDefined();
  });

  it('should get detail success', () => {
    const id = 4456602943754718;

    const detail = controller.getDetail(id);

    expect(detail).toBeDefined();
  });

  it('should get detail failed', () => {
    const id = 0;

    expect(() => {
      controller.getDetail(id);
    }).toThrow();
  });
});
