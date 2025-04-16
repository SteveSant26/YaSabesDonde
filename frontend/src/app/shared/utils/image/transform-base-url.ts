import { environment } from "@environment/environment.development"

export const transformBaseUrl = (url: string): string => {
    return environment.baseApiUrl + url;
}