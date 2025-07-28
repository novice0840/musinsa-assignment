import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Hello World 메시지 조회' })
  @ApiResponse({ status: 200, description: 'Hello World 메시지 반환' })
  getHello(): string {
    return this.appService.getHello();
  }
}
