import { Module } from '@nestjs/common';
import { AppConfigModule } from './common/appConfig.module';
import { DatabaseModule } from './common/database.module';

@Module({
  imports: [AppConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
