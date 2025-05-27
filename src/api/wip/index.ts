import request from '@/utils/request'
import type { WipItem, ApiResponse } from '@/api/wip/type'

enum API {
    QUERYWIP_URL = '/jiangxi/wip/queryByTechName',
}


export const getWipByTechName = (techName: string) =>
    request.get<any,ApiResponse<WipItem[]>>(API.QUERYWIP_URL + `/${techName}`)