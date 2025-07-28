import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  async create(
    createApplicationDto: CreateApplicationDto,
    files: {
      resume?: Express.Multer.File[];
      portfolio?: Express.Multer.File[];
    },
  ) {
    const resumeUrl = files.resume?.[0]?.filename;
    const portfolioUrl = files.portfolio?.[0]?.filename;

    return this.prisma.application.create({
      data: {
        ...createApplicationDto,
        resumeUrl,
        portfolioUrl,
      },
    });
  }
}
