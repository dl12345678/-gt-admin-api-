// syscode 列表 dto
export class SysCodeDTO {
  // 主键
  readonly id: number;
  // 字典类型
  readonly typeCode: string;
  // 字典编码
  readonly sysCode: string;
  // 字典名称
  readonly sysName: string;
  // 备注信息
  readonly remark: string;
}
