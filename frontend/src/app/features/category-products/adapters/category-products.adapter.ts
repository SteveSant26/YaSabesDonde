import { CategoryProducts, CategorysProducts } from "../models";

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
    };
};

export const categoryProductsAdapterArray = (dataClient: any): CategorysProducts => {
    return {
        data: dataClient.data.map(categoryProductsAdapter),
        meta: dataClient.meta,
    }
};