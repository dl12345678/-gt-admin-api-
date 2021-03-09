/**
 * 数据库配置
 */

// 生产数据库配置
const proConfig = {
  mysql: {
    port: 3306, // 数据库端口号
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库链接用户名
    password: '123456', // 数据库用户名密码
    database: 'unicorn', // 数据库名
    connectionLimit: 10, // 连接限制
  },
};

// 开发数据库配置
const devConfig = {
  mysql: {
    port: 3306, // 数据库端口号
    host: 'localhost', // 数据库地址
    user: 'root', // 数据库链接用户名
    password: '123456', // 数据库用户名密码
    database: 'unicorn', // 数据库名
    connectionLimit: 10, // 连接限制
  },
};

// 根据不同环境得到不同的配置

const config = process.env.NODE_ENV ? proConfig : devConfig;

// 对外导出
export default config;
