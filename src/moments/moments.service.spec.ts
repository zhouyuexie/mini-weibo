import { Test, TestingModule } from '@nestjs/testing';
import { MomentsService } from './moments.service';

describe('MomentsService', () => {
  let service: MomentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MomentsService],
    }).compile();

    service = module.get<MomentsService>(MomentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get list success without query params', () => {
    const list = service.getList();

    expect(list).toHaveLength(2);
  });

  it('should get list success with query params', () => {
    const list = service.getList(1, 1);

    expect(list).toHaveLength(1);
  });

  it('should get detail success', () => {
    const id = 4456602943754718;

    const detail = service.getDetail(id);

    expect(detail).toBeDefined();
  });

  it("should can't get detail", () => {
    const id = 0;

    const detail = service.getDetail(id);

    expect(detail).toBeUndefined();
  });
});
