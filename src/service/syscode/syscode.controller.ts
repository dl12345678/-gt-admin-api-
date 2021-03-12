import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SysCodeDTO } from 'src/dto/syscode/syscode.dto';
import { SyscodeService } from './syscode.service';

@Controller()
export class SyscodeController {
  constructor(private readonly syscodeService: SyscodeService) {}

  @Get('v1/syscodes')
  list() {
    return this.syscodeService.list();
  }

  @Post('v1/syscodes')
  save(@Body() body: SysCodeDTO) {
    return this.syscodeService.save(body);
  }

  @Get('v1/syscodes/:id')
  detail(@Param() params) {
    return this.syscodeService.detail(params.id);
  }

  @Delete('v1/syscodes/:id')
  delete(@Param() params) {
    return this.syscodeService.delete(params.id);
  }
}
