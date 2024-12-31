import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { DiskService } from 'src/disk/disk.service';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  controllers: [ComputerController],
  imports: [DiskModule, CpuModule],
})
export class ComputerModule {}
