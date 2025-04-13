// 基础响应类型
export interface Response<T> {
    code: number
    msg: string
    data: T
}

// Process类型
export interface Process {
    techno: string;
    techName: string;
    iscost: string | number; // 根据实际数据可能是字符串或数字
}

// ProcessIndicator类型
export interface ProcessIndicator {
    displayOrd: string | number;
    techno: string;
    techName: string | null;
    writer: string;
    writeDate: string; // ISO格式日期字符串
    auditor: string;
    auditorDate: string;
    ppqe: string;
    ppc: string;
    ppcDate: string;
    dc: string;
    dcDate: string;
    productNo: string;
    instState: string;
    oldRev: string;
    process: Process;
}