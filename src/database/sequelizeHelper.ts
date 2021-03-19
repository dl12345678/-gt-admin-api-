import * as Sequelize from 'sequelize'; // 引入 Sequelize 库
import sequelize from '../database/sequelize'; // 引入 Sequelize 实例

// sql execute
export async function execute({
  type = Sequelize.QueryTypes.SELECT,
  raw = true,
  sql,
}): Promise<any> {
  const res = await sequelize.query(sql, {
    type: type, // 查询方式
    raw: raw, // 是否使用数组组装的方式展示结果
    logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
  });

  return res;
}
