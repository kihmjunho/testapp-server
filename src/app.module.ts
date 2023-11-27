import { Module } from '@nestjs/common';
import { AppConfigModule } from './common/appConfig.module';
import { DatabaseModule } from './common/database.module';
import { ContentModule } from './domain/content/content.module';

@Module({
  imports: [AppConfigModule, DatabaseModule, ContentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
