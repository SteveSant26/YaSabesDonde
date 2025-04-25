import { imageAdapter } from "@shared/adapters";
import { CategoryProduct, CategoryProductsResponse } from "../models";

export const categoryProductAdapter = (dataClient: any): CategoryProduct => {
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
        image: data && data.image && imageAdapter(data.image)
    };
};

export const categoryProductsAdapterArray = (dataClient: any): CategoryProductsResponse => {
    return {
        data: dataClient.data.map(categoryProductAdapter),
        meta: dataClient.meta,
    }
};