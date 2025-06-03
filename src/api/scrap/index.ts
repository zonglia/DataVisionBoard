import request from '@/utils/request'

enum API {
    DAILY_URL = '/jiangxi/scrap/daily',
}

import type { ScrapResponse } from './type'



export const getScrapDaily = (category: string) =>
    request.get<any, ScrapResponse>(API.DAILY_URL + `/${category}`)