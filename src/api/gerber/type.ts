/** Gerber 数据项 */
export interface GerberItem {
    /** 日期 (格式: YYYY-MM-DD) */
    date: string;
    /** Gerber 文件名称 */
    name: string;
    /** 产品编号/厂内型号 */
    pdctno: string;
    /** 更新内容 */
    updateContent: string;
    /** 类别 */
    kind: string;
    /** 是否需要治具 */
    isNeed: string;
    /** 治具编号 (可能为 null) */
    zhiju: string;
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