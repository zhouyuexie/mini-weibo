import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MomentsController } from './moments/moments.controller';
import { MomentsService } from './moments/moments.service';
import { MomentsModule } from './moments/moments.module';

@Module({
  imports: [MomentsModule],
  controllers: [AppController, MomentsController],
  providers: [AppService, MomentsService],
})
export class AppModule {}
