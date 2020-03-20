import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MomentsModule } from './api/moments/moments.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';
import { NestModule } from '@nestjs/common/interfaces/modules/nest-module.interface';
import { UserMiddleware } from './middleware/user.middleware';
import { UserController } from './api/user/user.controller';
import { UserService } from './api/user/user.service';

@Module({
  imports: [MomentsModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    UserService,
  ],
  controllers: [UserController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(UserMiddleware).forRoutes('api');
  }
}
