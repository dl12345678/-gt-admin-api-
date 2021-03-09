import { Module } from '@nestjs/common';
import { SyscodeService } from './syscode.service';
import { SyscodeController } from './syscode.controller';

@Module({
  providers: [SyscodeService],
  controllers: [SyscodeController],
})
export class SyscodeModule {}
