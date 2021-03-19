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

  // 保存接口
  @Post('v1/syscodes')
  async save(@Body() body: SysCodeDTO) {
    const { syscodeService } = this;
    const { save, check } = syscodeService;
    const checkResult = await check(body);
    if (!checkResult) {
      return '数据已存在，不可重复添加';
    }
    return save(body);
  }

  // 详情接口
  @Get('v1/syscodes/:id')
  detail(@Param() params) {
    return this.syscodeService.detail(params.id);
  }

  // 删除接口
  @Delete('v1/syscodes/:id')
  delete(@Param() params) {
    return this.syscodeService.delete(params.id);
  }
}
