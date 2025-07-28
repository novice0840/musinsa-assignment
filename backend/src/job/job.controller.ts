import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
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
  @ApiOperation({ summary: '모든 활성 채용 공고 조회' })
  @ApiResponse({
    status: 200,
    description: '채용 공고 목록을 성공적으로 조회했습니다.',
  })
  findAll() {
    return this.jobService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 채용 공고 조회' })
  @ApiResponse({
    status: 200,
    description: '채용 공고를 성공적으로 조회했습니다.',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '채용 공고 수정' })
  @ApiResponse({
    status: 200,
    description: '채용 공고가 성공적으로 수정되었습니다.',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJobDto: Partial<CreateJobDto>,
  ) {
    return this.jobService.update(id, updateJobDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '채용 공고 삭제 (비활성화)' })
  @ApiResponse({
    status: 200,
    description: '채용 공고가 성공적으로 삭제되었습니다.',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jobService.remove(id);
  }
}
