import { Controller, Get } from '@nestjs/common';

@Controller('contents')
export class ContentController {
  // constructor(private readonly contentService: ContentService) {}

  @Get()
  getAll() {
    return 'hello test app';
  }
}
