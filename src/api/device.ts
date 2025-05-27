import request from '@/utils/request'






export const getDevicesByWorkshop = (workshopId: number) => {
    return request<any>({
        url: '/device/listByWorkshopId',
        method: 'GET',
        params: {  // 使用params传递查询参数
            workshopId
        }
    })
}
