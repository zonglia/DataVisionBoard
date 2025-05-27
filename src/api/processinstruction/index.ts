import request from '@/utils/request'



export const reqProcessIndicator = (productNo: string) => {
    return request<any, any>({
        url: `/jiangxi/processIndicator/query/${productNo}`,
        method: 'GET',
    })
}