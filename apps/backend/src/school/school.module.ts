import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { SchoolController } from './school.controller';
import { PrismaService } from '@/prisma/prisma.service';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService],
})
export class SchoolModule {}
