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
    return this.prisma.job.findMany();
  }
}
