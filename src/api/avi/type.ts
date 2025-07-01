export interface BBTYieldResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** 良率数据列表 */
    data: BBTYile[];
}

export interface AVIYieldResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** 良率数据列表 */
    data:AVIYile[];
}

interface BBTYile {
    /** 产品编号 */
    pdctNo: string;
    /** 检验数量 */
    checkQuantity: number;
    /** 返工数量 */
    repqty: number;
    /** MRB剩余数量 */
    mrbrest: number;
    /** 检验类型 */
    checkKind: string;
    /** 批次号 */
    lotNo: string;
    /** 机台编号 */
    machineNumber: string;
    /** 检验日期 (格式: YYYY-MM-DD) */
    checkDate: string;
}

interface AVIYile {
    /** 产品编号 */
    pdctNo: string;
    /** 检验数量 */
    chkQty: number;
    /** 合格数量 */
    measupQty: number;
    /** 报废数量（返工数量） */
    sunit: number;
    /** 检验种类 */
    chkKind: string;
    /** 检验日期 (格式: YYYY-MM-DD) */
    chkDate: string;
    /** 检验人员 */
    checker: string;
    /** 录入人员 */
    keyin: string;
}