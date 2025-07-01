import request from '@/utils/request'

enum API {
    DEVICE_STATUS = '/jiangxi/excel/device',
}
import type { DeviceYieldResponse } from './type'


export const getDeviceStatus = (techName: string) =>
    request.get<any, DeviceYieldResponse>(API.DEVICE_STATUS + `/${techName}`)

