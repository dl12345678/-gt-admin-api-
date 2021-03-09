import { Injectable } from '@nestjs/common';

import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

@Injectable()
export class SyscodeService {
  // 查询syscode列表 - 不进行分页
  async list(): Promise<any | undefined> {
    try {
      const sql = `SELECT id,typeCode,sysCode,sysName,remark FROM  t_b_sys_code`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return { code: 200, data: res, message: '' };
    } catch (error) {
      throw error;
    }
  }

  // 查询详情
  async detail(id): Promise<any | undefined> {
    try {
      const sql = `SELECT id,typeCode,sysCode,sysName,remark FROM  t_b_sys_code where id=${id}`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return { code: 200, data: res, message: '' };
    } catch (error) {
      throw error;
    }
  }
}
