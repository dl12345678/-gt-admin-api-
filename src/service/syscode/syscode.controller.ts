import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SysCodeDTO } from 'src/dto/syscode/syscode.dto';
import { SyscodeService } from './syscode.service';

@Controller()
export class SyscodeController {
  constructor(private readonly syscodeService: SyscodeService) {}

  // 查询全部列表
  @Get('v1/syscodes')
  list() {
    return this.syscodeService.list();
  }

  @Post('v1/syscodes')
  async save(@Body() body: SysCodeDTO) {
    const { syscodeService } = this;
    const { save, check } = syscodeService;
    const checkResult = await check(body);
    if (!checkResult) {
      return { code: 400, message: '数据已存在，不可重复添加', data: null };
    }
    return save(body);
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
