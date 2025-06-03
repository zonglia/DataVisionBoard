export interface YieldResponse {
    msg: string;
    code: number;
    data: YieldItem[];
}
interface YieldItem {
    pdctNo: string;
    chkQty: string;
    repQty: string;
    chkDate: string;
    firstPassYield: string;
    finalYield: string
}