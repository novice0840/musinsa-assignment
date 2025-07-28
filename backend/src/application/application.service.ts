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
}
