import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from '../dto/create-application.dto';

@ApiTags('지원 이력')
@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  @ApiOperation({ summary: '지원서 제출' })
  @ApiResponse({
    status: 201,
    description: '지원서가 성공적으로 제출되었습니다.',
  })
  create(@Body() createApplicationDto: CreateApplicationDto) {
    return this.applicationService.create(createApplicationDto);
  }

  @Get()
  @ApiOperation({ summary: '모든 지원서 조회' })
  @ApiResponse({
    status: 200,
    description: '지원서 목록을 성공적으로 조회했습니다.',
  })
  findAll() {
    return this.applicationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 지원서 조회' })
  @ApiParam({ name: 'id', description: '지원서 ID' })
  @ApiResponse({
    status: 200,
    description: '지원서를 성공적으로 조회했습니다.',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.applicationService.findOne(id);
  }

  @Get('job/:jobId')
  @ApiOperation({ summary: '특정 채용 공고의 지원서 목록 조회' })
  @ApiParam({ name: 'jobId', description: '채용 공고 ID' })
  @ApiResponse({
    status: 200,
    description: '채용 공고별 지원서 목록을 성공적으로 조회했습니다.',
  })
  findByJobId(@Param('jobId', ParseIntPipe) jobId: number) {
    return this.applicationService.findByJobId(jobId);
  }
}
