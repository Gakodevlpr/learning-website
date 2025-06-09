export interface APIResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export interface APIRequest {
    method: string;
    url: string;
    body?: any;
    headers?: Record<string, string>;
}