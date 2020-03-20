import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
  UsePipes,
} from '@nestjs/common';
import { MomentsService } from './moments.service';
import { Moments2NumberPipe } from './pipe/moments.pipe';
import { UserRoles } from '../../auth/Role';

@Controller('moments')
export class MomentsController {
  constructor(private readonly momentsService: MomentsService) {}

  @Get()
  @UsePipes(new Moments2NumberPipe())
  @UserRoles()
  public getList(@Query('page') page?: number, @Query('size') size?: number) {
    return this.momentsService.getList(page, size);
  }

  @Get('/:id')
  @UsePipes(new Moments2NumberPipe())
  @UserRoles()
  public getDetail(@Param('id') id: number) {
    const detail = this.momentsService.getDetail(id);
    if (!detail) {
      throw new NotFoundException();
    }
    return detail;
  }
}
