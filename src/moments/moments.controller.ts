import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { MomentsService } from './moments.service';

@Controller('moments')
export class MomentsController {
  constructor(private readonly momentsService: MomentsService) {}

  @Get()
  public getList(@Query('page') page?: number, @Query('size') size?: number) {
    return this.momentsService.getList(page, size);
  }

  @Get('/:id')
  public getDetail(@Param('id') id: number) {
    const detail = this.momentsService.getDetail(id);
    if (!detail) {
      throw new NotFoundException();
    }
    return detail;
  }
}
