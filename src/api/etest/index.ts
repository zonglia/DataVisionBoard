import request from '@/utils/request'

enum API {
    BBT_YIELD = '/test/yield',
}

import type { YieldResponse } from './type'



export const getYield = (category: string) =>
    request.get<any, YieldResponse>(API.BBT_YIELD + `/${category}`)