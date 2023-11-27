import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentController } from './content.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ContentController],
  providers: [],
})
export class ContentModule {}
