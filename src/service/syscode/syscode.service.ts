import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import * as Sequelize from 'sequelize';

// sql 执行辅助类
import { execute } from '../../database/sequelizeHelper';

import { SysCodeDTO } from '../../dto/syscode/syscode.dto';
import { getCustomId } from '../../utils/customId';

@Injectable()
export class SyscodeService {
  // 查询syscode列表 - 不进行分页
  async list(): Promise<any> {
    try {
      const sql = `SELECT id,typeCode,sysCode,sysName,remark FROM  t_b_sys_code WHERE dataStatus=1`;
      const res = await execute({ sql });

      return plainToClass(SysCodeDTO, res);
    } catch (error) {
      throw error;
    }
  } // list end

  // 查询详情
  async detail(id): Promise<SysCodeDTO> {
    try {
      const sql = `SELECT id,typeCode,sysCode,sysName,remark FROM  t_b_sys_code where id=${id}`;
      const res = await execute({ sql });

      return plainToClass(SysCodeDTO, res[0]);
    } catch (error) {
      throw error;
    }
  } // detail end

  // 删除
  async delete(id): Promise<boolean> {
    try {
      const sql = `UPDATE  t_b_sys_code SET dataStatus=0 where id=${id}`;
      const [other, row] = await execute({
        sql,
        type: Sequelize.QueryTypes.UPDATE,
        raw: false,
      });

      return row > 0;
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

      const [id, ,] = await execute({
        sql,
        type: Sequelize.QueryTypes.INSERT,
        raw: false,
      });

      return { id };
    } catch (error) {
      throw error;
    }
  } //save end

  //  是否已经存在
  async check(SysCodeDTO): Promise<boolean> {
    try {
      const { typeCode, sysCode, sysName } = SysCodeDTO;

      const sql = `SELECT id FROM t_b_sys_code WHERE typeCode='${typeCode}' AND sysCode='${sysCode}'`;
      const res = await execute({ sql });

      if (res.length == 0) {
        const _sql = `SELECT id FROM t_b_sys_code WHERE typeCode='${typeCode}' AND sysCode='${sysCode}' AND sysName='${sysName}'`;
        const res = await execute({ sql: _sql });

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
