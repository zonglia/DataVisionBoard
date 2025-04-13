import request from '../../utils/request'

import type {
    Response,
    ProcessIndicator
} from './type'

//项目用户相关的请求地址

enum API {
    ProcessIndicator_QUERY_URL = '/jiangxi/processIndicator/query',
}


// api/processinstruction.ts
export const reqProcessIndicator = (productNo: string): Promise<Response<ProcessIndicator[]>> => {
    return request.get(API.ProcessIndicator_QUERY_URL, { params: { productNo } });
}