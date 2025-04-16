import { Menu } from "../models";

export const menuAdapter = (dataClient: any): Menu => {
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