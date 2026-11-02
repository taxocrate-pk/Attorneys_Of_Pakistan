import { S } from './common'
import karachi from './karachi'
import islamabad from './islamabad'
import rawalpindi from './rawalpindi'
import lahore from './lahore'
import courtMarriage from './court-marriage'
import onlineNikah from './online-nikah'
import adoption from './adoption'
import family from './family'
import criminal from './criminal'
import civil from './civil'
import corporate from './corporate'
import pakistan from './pakistan'

export const moneyPages = {
  [S.karachi]: karachi,
  [S.islamabad]: islamabad,
  [S.rawalpindi]: rawalpindi,
  [S.lahore]: lahore,
  [S.courtMarriage]: courtMarriage,
  [S.onlineNikah]: onlineNikah,
  [S.adoption]: adoption,
  [S.family]: family,
  [S.criminal]: criminal,
  [S.civil]: civil,
  [S.corporate]: corporate,
  [S.pakistan]: pakistan,
}
