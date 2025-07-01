import request from '@/utils/request'

enum API {
    GET_ATTENDANCE = '/jiangxi/excel/attendance',
}
import type { AttendanceResponse } from './type'


export const getAttendance = (process: string) =>
    request.get<any, AttendanceResponse>(API.GET_ATTENDANCE + `/${process}`)

