// 定义API响应类型
export interface ScrapResponse {
    msg: string;
    code: number;
    data: ScrapItem[];
}
interface ScrapItem {
    bugNo: string;
    bugName: string;
    techNo: string;
    kind: string;
    outKind: string | null;
    keyin: string;
    indate: string;
    sunit: string; // 注意API返回的是字符串格式的数字
}