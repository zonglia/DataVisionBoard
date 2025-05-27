// API响应格式
export interface ApiResponse<T = any> {
    msg: string
    code: number
    data: T
}
// 车间基础接口
export interface Workshop {
    id: number
    name: string
    remark: string
    createTime: string
    updateTime: string
    devices?: Device[] // 一对多关系：一个车间有多台设备
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
    workshopId?: number
    workshop?: Workshop // 多对一关系：一台设备属于一个车间
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
