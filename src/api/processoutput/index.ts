import request from '@/utils/request'

enum API {
    DAILY_URL = '/jiangxi/processOutput/daily',
    MONTHLY_URL = '/jiangxi/processOutput/monthly'
}




export const getProcessDailyOutPut = (category: string) =>
    request.get<any, any>(API.DAILY_URL + `/${category}`)

export const getProcessMonthlyOutPut = (category: string) =>
    request.get<any, any>(API.MONTHLY_URL + `/${category}`)