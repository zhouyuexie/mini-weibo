import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { IRequest, IUserInfo } from '../auth/Role';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: IRequest, res: Response, next: () => void) {
    const token = req.header('Authorization');
    if (token) {
      // TODO: check jwt token
      req.user = {
        // roles: '',
        // userName: '',
        // userId: ''
      } as IUserInfo;
    }

    next();
  }
}
