import { Injectable } from '@nestjs/common';

import { plainToClass } from 'class-transformer';

import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../../database/sequelize'; // 引入 Sequelize 实例

import { getCustomId } from '../../utils/customId';
import { UserDto } from '../../dto/user/user.dto';

@Injectable()
export class UserService {
  // 查询syscode列表 - 不进行分页
  async list(): Promise<UserDto[]> {
    try {
      const sql = `SELECT id,nickName,realName,mobile,salt,remark FROM  sys_admin_user WHERE dataStatus=1`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return plainToClass(UserDto, res);
    } catch (error) {
      throw error;
    }
  } // list end

  // 查询详情
  async detail(id): Promise<UserDto> {
    try {
      const sql = `SELECT id,nickName,realName,mobile,salt,remark FROM  sys_admin_user where id=${id}`;

      const res = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.SELECT, // 查询方式
        raw: true, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return plainToClass(UserDto, res[0]);
    } catch (error) {
      throw error;
    }
  } // detail end

  // 删除
  async delete(id): Promise<boolean> {
    try {
      const sql = `UPDATE  sys_admin_user SET dataStatus=0 where id=${id}`;

      const [other, row] = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.UPDATE, // 查询方式
        raw: false, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });

      return row > 0;
    } catch (error) {
      throw error;
    }
  } // delete end

  // 保存
  async save(UserDto): Promise<any> {
    try {
      const sql = `INSERT INTO sys_admin_user(id,nickName,realName,mobile,password,salt,remark)  
        VALUES(${getCustomId()},'${UserDto.nickName}', '${
        UserDto.realName
      }', '${UserDto.mobile}', '${UserDto.password}', '${UserDto.salt}', '${
        UserDto.remark
      }')`;
      const [id, ,] = await sequelize.query(sql, {
        type: Sequelize.QueryTypes.INSERT, // 查询方式
        raw: false, // 是否使用数组组装的方式展示结果
        logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
      });
      return { id };
    } catch (error) {
      throw error;
    }
  } //save end

  // 查询是否有该用户
  async findByMobile(moible: string): Promise<any> {
    try {
      const sql = `select id,nickName,realName,mobile,password,salt,remark from `;
    } catch (error) {
      throw error;
    }
  } // findByMobile end
}
