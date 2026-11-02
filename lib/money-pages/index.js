import { S } from './common'
import karachi from './karachi'
import islamabad from './islamabad'
import rawalpindi from './rawalpindi'
import lahore from './lahore'

export const moneyPages = {
  [S.karachi]: karachi,
  [S.islamabad]: islamabad,
  [S.rawalpindi]: rawalpindi,
  [S.lahore]: lahore,
}
