// syscode 列表 dto
export class UserDto {
  // 主键
  readonly id: number;
  // 昵称
  readonly nickName: string;
  // 真实姓名
  readonly realName: string;
  //手机号
  readonly mobile: string;
  // 密码
  readonly password: string;
  // 加密盐
  readonly salt: string;
  // 备注信息
  readonly remark: string;
}
