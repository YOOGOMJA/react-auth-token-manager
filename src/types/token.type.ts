import { TokenTypeEnum } from './token.enum';

export interface Token {
  type: keyof typeof TokenTypeEnum;
  payload: string;
  expireAt: Date;
}
