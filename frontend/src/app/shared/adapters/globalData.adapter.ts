import { GlobalData } from '@shared/types/globalData.type';
import { imageAdapter } from '@shared/adapters/image.adapter';
export const GlobalDataAdapter = (global: any): GlobalData => {
    console.info(global)
    return {
        ...global.data,
        // logoSite: imageAdapter(global.data.logoSite),
        // iconSite: imageAdapter(global.data.iconSite)
    };
};
