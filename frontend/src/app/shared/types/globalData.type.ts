import { Image } from "@shared/models";

export interface GlobalData {
    siteName: string;
    iconSite?: Image;
    logoSite?: Image;
    description: string;
    defaultSeo?: {
        metaTitle: string;
        metaDescription: string;
        shareImage: string;
    };
}
