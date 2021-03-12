import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

import { SysCodeDTO } from '../../dto/syscode/syscode.dto';
import { getCustomId } from '../../utils/customId';

@Injectable()
export class SyscodeService {
  // 查询syscode列表 - 不进行分页
  async list(): Promise<SysCodeDTO[]> {
    try {
      const sql = `SELECT id,typeCode,sysCode,sysName,remark FROM  t_b_sys_code WHERE dataStatus=1`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return plainToClass(SysCodeDTO, res);
    } catch (error) {
      throw error;
    }
  } // list end

  // 查询详情
  async detail(id): Promise<SysCodeDTO> {
    try {
      const sql = `SELECT id,typeCode,sysCode,sysName,remark FROM  t_b_sys_code where id=${id}`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return plainToClass(SysCodeDTO, res[0]);
    } catch (error) {
      throw error;
    }
  } // detail end

  // 删除
  async delete(id): Promise<any | undefined> {
    try {
      const sql = `UPDATE  t_b_sys_code SET dataStatus=0 where id=${id}`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return { code: 200, data: res, message: '' };
    } catch (error) {
      throw error;
    }
  } // delete end

  // 保存
  async save(SysCodeDTO): Promise<any> {
    try {
      const sql = `INSERT INTO t_b_sys_code(id, typeCode,sysCode,sysName,remark)  
        VALUES(${getCustomId()},'${SysCodeDTO.typeCode}', '${
        SysCodeDTO.sysCode
      }', '${SysCodeDTO.sysName}', '${SysCodeDTO.remark}')`;
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: false, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });
      console.log('=========');
      console.log(res);
      console.log('=========');
      return res;
    } catch (error) {
      throw error;
    }
  } //save end

  //  是否已经存在
  async isHas(
    typeCode: string,
    sysCode: string,
    sysName: string,
  ): Promise<boolean> {
    try {
      const sql = `SELECT id FROM t_b_sys_code WHERE typeCode='${typeCode}' AND sysCode='${sysCode}'`;
      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      if (res.length == 0) {
        const _sql = `SELECT id FROM t_b_sys_code WHERE typeCode='${typeCode}' AND sysCode='${sysCode}' AND sysName='${sysName}'`;
        const res = await sequelize.query(_sql, {
          type: Sequelize.QueryTypes.SELECT, // 查询方式
          raw: true, // 是否使用数组组装的方式展示结果
          logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
        });

        if (res.length > 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
} // class SyscodeService end
