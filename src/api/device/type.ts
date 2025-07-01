export interface DeviceYieldResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** 良率数据列表 */
    data: Device[];
}

interface Device {
    name: string; // 日期 (格式: YYYY-MM-DD)
    status: number,

}