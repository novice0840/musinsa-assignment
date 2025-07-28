import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ description: '채용 공고 제목' })
  @IsString()
  title: string;

  @ApiProperty({ description: '회사명' })
  @IsString()
  company: string;

  @ApiPropertyOptional({ description: '근무 지역' })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiPropertyOptional({ description: '업무 설명' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ description: '자격 요건' })
  @IsOptional()
  @IsString()
  requirements?: string;

  @ApiPropertyOptional({ description: '복리후생' })
  @IsOptional()
  @IsString()
  benefits?: string;

  @ApiPropertyOptional({ description: '급여' })
  @IsOptional()
  @IsString()
  salary?: string;

  @ApiPropertyOptional({ description: '근무 형태 (정규직, 계약직, 인턴 등)' })
  @IsOptional()
  @IsString()
  workType?: string;

  @ApiPropertyOptional({ description: '경력 요건 (신입, 경력 등)' })
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiPropertyOptional({ description: '활성 상태', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
