import { Controller, Get, Param } from '@nestjs/common';
import { SyscodeService } from './syscode.service';

@Controller()
export class SyscodeController {
  constructor(private readonly syscodeService: SyscodeService) {}

  @Get('v1/syscode')
  list() {
    return this.syscodeService.list();
  }

  @Get('v1/syscode/:id')
  detail(@Param() params) {
    return this.syscodeService.detail(params.id);
  }
}
