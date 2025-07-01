// 基础API响应类型
export interface OutputResponse {
    code: number;
    msg: string;
    data: OutputData;
}

interface OutputData {
    techNo: string;
    outQty: number;
    outQtyU: number;
    outArea: number;
    units: string;
    outDate: string;
    layer: string;
    kind: string;
    inDate: string;
    outAreas: number;
    procwip: null | any;
    wipArea: null | number;
    callQty: null | number;
    workspace: string;
    expr2: null | any;
    callArea: null | number;
}