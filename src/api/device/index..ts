import request from '@/utils/request'


// API响应格式
export interface ApiResponse<T = any> {
    msg: string
    code: number
    data: T
}
// 设备基础接口
export interface Device {
    id: number
    name: string
    status: DeviceStatus
    remark: string
    createTime: string
    updateTime: string
    position: string  // 设备位置编号如 "1#", "2#"
}

// 设备列表响应类型
export type DeviceListResponse = ApiResponse<Device[]>
// 设备状态枚举
export enum DeviceStatus {
    BOOTING = 0,     // 开机
    RUNNING = 1,     // 运行
    MAINTENANCE = 2, // 保养
    SHUTDOWN = 3     // 关机
}

// 获取指定车间的设备列表
export const getDevicesByWorkshop = (workshopId: number) => {
    return request<DeviceListResponse>({
        url: `/device/listByWorkshopId/${workshopId}`,
        method: 'GET'
    })
}

