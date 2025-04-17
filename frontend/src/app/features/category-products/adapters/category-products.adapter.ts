import { imageAdapter } from "@shared/adapters";
import { CategoryProducts, CategoryProductsResponse } from "../models";

export const categoryProductsAdapter = (dataClient: any): CategoryProducts => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        documentId: data.document_id,
        name: data.name,
        description: data.description,
        products: data.products,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        publishedAt: data.published_at,
        image: imageAdapter(data.image)
    };
};

export const categoryProductsAdapterArray = (dataClient: any): CategoryProductsResponse => {
    console.log("dataClient", dataClient);
    return {
        data: dataClient.data.map(categoryProductsAdapter),
        meta: dataClient.meta,
    }
};