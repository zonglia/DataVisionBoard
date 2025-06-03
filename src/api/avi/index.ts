import request from '@/utils/request'

enum API {
    FQC_YIELD = '/jiangxi/fqc/yield',
}

import type { YieldResponse } from './type'



export const getAVIYield = (category: string) =>
    request.get<any, YieldResponse>(API.FQC_YIELD + `/${category}`)