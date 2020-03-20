import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { IRegisterReq } from './user.interface';
import { UserRegisterPipe } from './pipe/user.pipe';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @UsePipes(new UserRegisterPipe())
  public register(@Body() body: IRegisterReq) {
    return this.userService.register(body.username, body.password);
  }
}
