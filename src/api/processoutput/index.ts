import request from '@/utils/request'

enum API {
    DAILY_URL = '/jiangxi/processOutput/daily',
    MONTHLY_URL = '/jiangxi/processOutput/monthly'
}

import type { OutputResponse } from './type'


export const getProcessDailyOutPut = (category: string) =>
    request.get<any, OutputResponse>(API.DAILY_URL + `/${category}`)

export const getProcessMonthlyOutPut = (category: string) =>
    request.get<any, OutputResponse>(API.MONTHLY_URL + `/${category}`)