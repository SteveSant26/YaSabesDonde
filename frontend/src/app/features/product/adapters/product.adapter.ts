import { categoryProductAdapter } from "@features/category-products/adapters";
import { imageAdapter } from "@shared/adapters";
import { Product, ProductResponse } from "../models";
import { ApiResponse } from "@shared/types";

export const productAdapter = (dataClient: any): Product => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        documentId: data.documentId,
        name: data.name,
        description: data.description,
        price: data.price,
        images: data.images && data.images.map((img: any) => imageAdapter(img)),
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        publishedAt: data.published_at,
        categoryProducts:  data.category && categoryProductAdapter(data.category)
    };
};

export const productResponseAdapter = (dataClient: any): ApiResponse<Product[]> => {
    return {
        data: dataClient.data.map(productAdapter),
        meta: dataClient.meta
    }
};