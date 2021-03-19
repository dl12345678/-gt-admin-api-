import { Injectable } from '@nestjs/common';

import * as Sequelize from 'sequelize';
import { plainToClass } from 'class-transformer';

// sql 执行辅助类
import { execute } from '../../database/sequelizeHelper';
import { menusDTO } from 'src/dto/menus/menus.dto';

@Injectable()
export class MenusService {
  // 查询左侧菜单列表
  async list(): Promise<menusDTO[]> {
    try {
      const sql = `select id,pid,permName,permUrl,sorter,selected,icon,funcId from t_b_perm_url where dataStatus=1`;
      const res = await execute({ sql });

      return plainToClass(menusDTO, res);
    } catch (error) {
      throw error;
    }
  }
}
