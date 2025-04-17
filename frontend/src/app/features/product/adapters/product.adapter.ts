export const productAdapter = (dataClient: any): any => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        documentId: data.document_id,
        name: data.name,
        description: data.description,
        price: data.price,
        images: data.images,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        publishedAt: data.published_at,
    };
};

export const productResponseAdapter = (dataClient: any): any => {
    return {
        data: dataClient.data.map(productAdapter),
        meta: dataClient.meta
    }
};