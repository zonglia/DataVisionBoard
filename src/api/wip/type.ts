export interface ApiResponse<T = any> {
    code: number;
    message?: string;
    data: T;
}

export interface WipItem {
    techNo: string;
    techName: string;
    model: {
        pdctNo: string;
        style: string;
        tghdij?: string;
        nospec: string;
    };
    procWip: number;
    units: string;
    category: string;
}

export interface GroupedItem {
    pdctNo: string;
    nospec: string;
    tghdij?: string;
    style: string;
    units: string;
    categoryData: Record<string, number>;
}