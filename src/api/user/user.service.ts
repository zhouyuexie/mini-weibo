import { BadRequestException, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import db from '../../../db/user.db';
import { Role } from '../../auth/Role';
import { AuthConfig } from '../../../config/auth.config';

@Injectable()
export class UserService {
  public register(username: string, password: string) {
    if (db.find(user => user.username === username)) {
      throw new BadRequestException('username is existed');
    }
    const newUser = {
      username,
      // TODO: encode password
      password,
      id: `user_${db.length}`,
    };
    db.push(newUser);

    return {
      token: this.generateJWT(username, newUser.id),
      id: newUser.id,
    };
  }

  protected generateJWT(username, id) {
    return jwt.sign(
      {
        username,
        roles: [Role.USER],
        id,
      },
      AuthConfig.secret,
      {
        expiresIn: AuthConfig.expiresIn,
      },
    );
  }
}
