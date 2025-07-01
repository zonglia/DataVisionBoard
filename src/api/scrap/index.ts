import request from '@/utils/request'

enum API {
    DAILY_URL = '/jiangxi/scrap/daily',
    Rate_URL = '/jiangxi/scrap/rate',
}

import type { ScrapResponse, ScrapRateResponse } from './type'



export const getScrapDailyBytechName = (category: string) =>
    request.get<any, ScrapResponse>(API.DAILY_URL + `/${category}`)


export const getScrapRateBytechName = (category: string) =>
    request.get<any, ScrapRateResponse>(API.Rate_URL + `/${category}`)