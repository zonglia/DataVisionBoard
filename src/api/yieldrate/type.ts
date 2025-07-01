export interface AOIYieldResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** 良率数据列表 */
    data: AOIYile[];
}

interface AOIYile {
    date: string; // 日期 (格式: YYYY-MM-DD)
    firstYield: number,
    finalYield: number
}