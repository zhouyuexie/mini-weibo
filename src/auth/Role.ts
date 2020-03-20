import { SetMetadata } from '@nestjs/common';
import { Request } from 'express';

export interface IUserInfo {
  roles: Role[];
  userName: string;
  userId: string;
}

export interface IRequest extends Request {
  user?: IUserInfo;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  BLACKLIST = 'BLACKLIST',
}

export const AdminRoles = () => SetMetadata('roles', [Role.ADMIN]);

export const UserRoles = () => SetMetadata('roles', [Role.USER]);
