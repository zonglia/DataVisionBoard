/** Gerber 数据项 */
export interface GerberItem {
    /** 日期 (格式: YYYY-MM-DD) */
    no: string;
    /** Gerber 文件名称 */
    process: string;
    /** 产品编号/厂内型号 */
    pdctno: string;
    /** 更新内容 */
    setting: string;
    /** 类别 */
    range: string;
    /** 是否需要治具 */
    fun: string;
}

/** API 响应结构 */
export interface GerberResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** Gerber 数据列表 */
    data: GerberItem[];
  }