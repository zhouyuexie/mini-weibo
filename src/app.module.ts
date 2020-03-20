import { Module } from '@nestjs/common';
import { MomentsModule } from './moments/moments.module';

@Module({
  imports: [MomentsModule],
})
export class AppModule {}
