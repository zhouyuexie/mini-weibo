import { IsString, MinLength } from 'class-validator';

export class IRegisterReq {
  @IsString()
  @MinLength(6)
  username: string;

  @IsString()
  @MinLength(6)
  password: string;
}
