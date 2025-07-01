import request from '@/utils/request'

enum API {
    BBT_YIELD = '/jiangxi/fqc/yield/bbt',
    AVI_YIELD = '/jiangxi/fqc/yield/avi'
}

import type { BBTYieldResponse, AVIYieldResponse } from './type'



export const getBBTYield = () =>
    request.get<any, BBTYieldResponse>(API.BBT_YIELD)

export const getAVIYield = () =>
    request.get<any, AVIYieldResponse>(API.AVI_YIELD)