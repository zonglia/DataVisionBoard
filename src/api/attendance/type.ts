/** 出勤统计数据项 */
export interface AttendanceItem {
    /** 在职员工总数 */
    totalEmployees: number;
    /** 实际出勤人数 */
    presentEmployees: number;
}

/** API响应结构 */
export interface AttendanceResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** 出勤数据列表 */
    data: AttendanceItem[];
}