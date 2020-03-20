import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MomentsModule } from './api/moments/moments.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guard/auth.guard';
import { NestModule } from '@nestjs/common/interfaces/modules/nest-module.interface';
import { UserMiddleware } from './middleware/user.middleware';

@Module({
  imports: [MomentsModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(UserMiddleware).forRoutes('api');
  }
}
