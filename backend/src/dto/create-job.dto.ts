import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ description: '자회사/계열사명' })
  @IsString()
  subsidiary: string;

  @ApiProperty({ description: '직무' })
  @IsString()
  occupation: string;

  @ApiProperty({ description: '담당업무' })
  @IsString()
  job: string;

  @ApiProperty({ description: '업무 설명' })
  @IsString()
  description: string;

  @ApiProperty({ description: '경력 (년수)' })
  @IsInt()
  career: number;

  @ApiProperty({ description: '고용형태' })
  @IsString()
  employment: string;

  @ApiProperty({ description: '근무지' })
  @IsString()
  place: string;
}
