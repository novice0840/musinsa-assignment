import { IsString, IsInt, IsEmail, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty({ description: '채용 공고 ID' })
  @IsInt()
  jobId: number;

  @ApiProperty({ description: '지원자 이름' })
  @IsString()
  name: string;

  @ApiProperty({ description: '이메일' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: '전화번호' })
  @IsString()
  phone: string;

  @ApiProperty({ description: '영문 이름' })
  @IsString()
  englishName: string;

  @ApiProperty({ description: '이력서 파일 URL', required: false })
  @IsOptional()
  @IsString()
  resumeUrl?: string;

  @ApiProperty({ description: '포트폴리오 파일 URL', required: false })
  @IsOptional()
  @IsString()
  portfolioUrl?: string;

  @ApiProperty({ description: '공고를 접한 경로' })
  @IsString()
  source: string;
}
