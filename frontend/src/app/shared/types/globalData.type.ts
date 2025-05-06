import { Image } from "@shared/models";

export interface GlobalData {
    siteName: string;
    favicon?: Image;
    logoSite?: Image;
    description: string;
    defaultSeo?: {
        metaTitle: string;
        metaDescription: string;
        shareImage: string;
    };
}
