import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateJobDto } from '../dto/create-job.dto';

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  async create(createJobDto: CreateJobDto) {
    return this.prisma.job.create({
      data: createJobDto,
    });
  }

  async findAll() {
    return this.prisma.job.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: { applications: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    return this.prisma.job.findUnique({
      where: { id },
      include: {
        applications: {
          select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async update(id: number, updateJobDto: Partial<CreateJobDto>) {
    return this.prisma.job.update({
      where: { id },
      data: updateJobDto,
    });
  }

  async remove(id: number) {
    // 소프트 삭제 (isActive를 false로 변경)
    return this.prisma.job.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
