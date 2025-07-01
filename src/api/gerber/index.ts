import request from '@/utils/request'

enum API {
    GET_GERBER = '/jiangxi/excel/gerber',
}
import type { GerberResponse } from './type'


export const getGerber = (pdctno: string) =>
    request.get<any, GerberResponse>(API.GET_GERBER + `/${pdctno}`)

