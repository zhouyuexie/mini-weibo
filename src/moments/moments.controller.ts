import { Controller, Get, Query } from '@nestjs/common';
import { MomentsService } from './moments.service';

@Controller('moments')
export class MomentsController {
  constructor(private readonly momentsService: MomentsService) {}

  @Get()
  public getList(@Query('page') page?: number, @Query('size') size?: number) {
    return this.momentsService.getList(page, size);
  }
}
