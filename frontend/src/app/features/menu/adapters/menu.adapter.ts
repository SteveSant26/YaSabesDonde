import { productAdapter } from "@features/product/adapters";
import { Menu, MenuResponse } from "../models";

export const menuAdapter = (dataClient: any): Menu => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        documentId: data.document_id,
        name: data.name,
        description: data.description,
        products: data.products.map((product: any) => productAdapter(product)),
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        publishedAt: data.published_at,
    };
};


export const menuResponseAdapter = (dataClient: any): MenuResponse => {
    console.log(dataClient);
    return {
        data: dataClient.data.map(menuAdapter),
        meta: dataClient.meta,
    }
};