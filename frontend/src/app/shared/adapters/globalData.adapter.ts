import { GlobalData } from '@shared/types/globalData.type';
import { imageAdapter } from '@shared/adapters/image.adapter';
export const GlobalDataAdapter = (global: any): GlobalData => {
    console.info(global)
    return {
        description : global.data.description,
        iconSite: global.data.iconSiten && imageAdapter(global.data.iconSite),
        logoSite: global.data.logoSite && imageAdapter(global.data.logoSite),
        siteName: global.data.siteName,
        defaultSeo: global.data.defaultSeo,

        // ...global.data,
        
        // logoSite: imageAdapter(global.data.logoSite),
        // iconSite: imageAdapter(global.data.iconSite)
    };
};
