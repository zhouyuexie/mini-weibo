import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { isEqual } from 'lodash';
import { IRequest } from '../auth/Role';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const expectRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const request: IRequest = context.switchToHttp().getRequest();
    if (expectRoles) {
      return isEqual(expectRoles, request.user?.roles);
    }
    return true;
  }
}
