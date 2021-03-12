import { customAlphabet } from 'nanoid';
/**
 * 数据库主键id
 */
export const getCustomId = (): string => {
  const nanoid = customAlphabet('0123456789', 16);
  return nanoid();
};
