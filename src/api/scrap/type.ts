export interface ScrapResponse {
    /** 响应消息 */
    msg: string;
    /** 状态码 */
    code: number;
    /** 报废数据列表 */
    data: ScrapItem[];
}

export interface ScrapItem {
    /** 产品编号 */
    pdctno: string;
    /** 批次号（注意末尾可能有空格） */
    batchno: string;
    /** 责任工序 */
    dutyproc: string;
    /** 报废工序 */
    scrapproc: string;
    /** 缺陷编号（注意末尾可能有空格） */
    bugno: string;
    /** 类型 */
    kind: string;
    /** 报废面板数 */
    spanel: number;
    /** 报废单位数 */
    sunit: number;
    /** 工作区域（空字符串） */
    workspace: string;
    /** 录入人（注意末尾可能有空格） */
    keyin: string;
    /** 录入时间（ISO格式） */
    indate: string;
    /** 详细报废信息 */
    scrap: {
        /** 缺陷编号（注意末尾可能有空格） */
        bugNo: string;
        /** 缺陷名称 */
        bugName: string;
        /** 技术编号 */
        techNo: string;
        /** 缺陷类型 */
        kind: string;
        /** 外部类型（空格填充） */
        outKind: string;
        /** 录入人（注意末尾可能有空格） */
        keyin: string;
        /** 录入日期（简略格式） */
        indate: string;
        /** 报废单位数（可能为null） */
        sunit: number | null;
        /** 产品型号信息 */
        model: {
            /** 产品编号 */
            pdctNo: string;
            /** 板件类型 */
            tghdij: string;
            /** 单位面积 */
            unitarea: string;
            /** 样式 */
            style: string;
            /** 规格 */
            nospec: string;
        };
    };
}


export interface ScrapRateResponse {
    msg: string;
    code: number;
    data: ScrapRateItem[];
}

interface ScrapRateItem {
    /** 报废率值 */
    scrap: number;
    /** 
     * 时间标识 
     * 格式说明：
     * - 年度数据: "2024Y"
     * - 季度数据: "2025Q1"
     * - 月度数据: "2025M4"
     * - 周数据: "W1"
     * - 日数据: "6月7日"
     */
    time: string;
}
