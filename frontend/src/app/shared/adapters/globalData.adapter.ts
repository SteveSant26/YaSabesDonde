import { GlobalData } from '@shared/types/globalData.type';
import { imageAdapter } from '@shared/adapters/image.adapter';
export const GlobalDataAdapter = (global: any): GlobalData => {
    return {
        description: global.data.description,
        favicon: global.data.favicon && imageAdapter(global.data.favicon),
        logoSite: global.data.logoSite && imageAdapter(global.data.logoSite),
        siteName: global.data.siteName,
        defaultSeo: global.data.defaultSeo,

    };
};
