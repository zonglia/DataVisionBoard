import request from '@/utils/request'

enum API {
    AOI_YIELD = '/jiangxi/excel/aoiYield',
}
import type { AOIYieldResponse } from './type'



export const getAOIYield = () =>
    request.get<any, AOIYieldResponse>(API.AOI_YIELD)

