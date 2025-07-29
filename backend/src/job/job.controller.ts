import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JobService } from './job.service';
import { CreateJobDto } from '../dto/create-job.dto';

@ApiTags('채용 공고')
@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Post()
  @ApiOperation({ summary: '새 채용 공고 생성' })
  @ApiResponse({
    status: 201,
    description: '채용 공고가 성공적으로 생성되었습니다.',
  })
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobService.create(createJobDto);
  }

  @Get()
  @ApiOperation({ summary: '모든 채용 공고 조회' })
  @ApiResponse({
    status: 200,
    description: '채용 공고 목록을 성공적으로 조회했습니다.',
  })
  findAll() {
    return this.jobService.findAll();
  }
}
