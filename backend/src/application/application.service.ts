import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateApplicationDto } from '../dto/create-application.dto';

@Injectable()
export class ApplicationService {
  constructor(private prisma: PrismaService) {}

  async create(createApplicationDto: CreateApplicationDto) {
    return this.prisma.application.create({
      data: createApplicationDto,
    });
  }

  async findAll() {
    return this.prisma.application.findMany({
      include: {
        job: {
          select: {
            id: true,
            title: true,
            company: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.application.findUnique({
      where: { id },
      include: {
        job: {
          select: {
            id: true,
            title: true,
            company: true,
            location: true,
          },
        },
      },
    });
  }

  async findByJobId(jobId: number) {
    return this.prisma.application.findMany({
      where: { jobId },
      include: {
        job: {
          select: {
            id: true,
            title: true,
            company: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
