import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationController } from './application/application.controller';
import { ApplicationService } from './application/application.service';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, ApplicationController, JobController],
  providers: [AppService, ApplicationService, JobService, PrismaService],
})
export class AppModule {}
