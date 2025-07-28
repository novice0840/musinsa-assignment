import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ApplicationController],
  providers: [AppService, ApplicationService, PrismaService],
})
export class AppModule {}
