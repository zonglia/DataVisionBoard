import request from '@/utils/request'


export const getLatest = () => {
    return request<any,any>({
        url: '/test/latest',
        method: 'GET',
    })
}
