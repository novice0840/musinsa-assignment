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
import { CreateApplicationDto } from '../dto/create-application.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ConfigService } from '@nestjs/config';

@ApiTags('지원 이력')
@Controller('applications')
export class ApplicationController {
  constructor(
    private readonly applicationService: ApplicationService,
    private readonly configService: ConfigService,
  ) {}

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
  async create(
    @Body() createApplicationDto: CreateApplicationDto,
    @UploadedFiles()
    files: {
      resume: Express.Multer.File[];
      portfolio?: Express.Multer.File[];
    },
  ) {
    const API_SERVER_URL = this.configService.get<string>('API_SERVER_URL');
    await this.applicationService.create({
      ...createApplicationDto,
      resumeUrl: API_SERVER_URL + '/upload/' + files.resume?.[0]?.filename,
      portfolioUrl:
        API_SERVER_URL + '/upload/' + files.portfolio?.[0]?.filename,
    });
    return { result: 'success' };
  }
}
