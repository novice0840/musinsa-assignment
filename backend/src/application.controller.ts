import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiConsumes,
} from '@nestjs/swagger';
import { ApplicationService } from './application.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('applications')
@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Post()
  @ApiOperation({ summary: '지원서 제출' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: '지원서가 성공적으로 제출되었습니다.',
  })
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'resume', maxCount: 1 },
        { name: 'portfolio', maxCount: 1 },
      ],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            callback(
              null,
              file.fieldname + '-' + uniqueSuffix + extname(file.originalname),
            );
          },
        }),
        fileFilter: (req, file, callback) => {
          if (file.mimetype.match(/\/(jpg|jpeg|png|gif|pdf|doc|docx)$/)) {
            callback(null, true);
          } else {
            callback(new Error('지원되지 않는 파일 형식입니다.'), false);
          }
        },
      },
    ),
  )
  create(
    @Body() createApplicationDto: CreateApplicationDto,
    @UploadedFiles()
    files: {
      resume?: Express.Multer.File[];
      portfolio?: Express.Multer.File[];
    },
  ) {
    console.log('Received createApplicationDto:', createApplicationDto);
    console.log(
      'Received files2:',
      files.resume?.[0]?.path,
      files.portfolio?.[0]?.path,
    );
    // return this.applicationService.create(createApplicationDto, files);
  }

  @Get()
  @ApiOperation({ summary: '모든 지원서 조회' })
  @ApiResponse({
    status: 200,
    description: '지원서 목록을 성공적으로 조회했습니다.',
  })
  findAll() {
    // return this.applicationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 지원서 조회' })
  @ApiParam({ name: 'id', description: '지원서 ID' })
  @ApiResponse({
    status: 200,
    description: '지원서를 성공적으로 조회했습니다.',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    // return this.applicationService.findOne(id);
  }
}
