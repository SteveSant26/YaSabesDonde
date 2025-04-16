import { Image } from "@shared/models";
import { transformBaseUrl } from "@shared/utils/image";

export const imageAdapter = (dataClient: any): Image => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        documentId: data.documentId,
        publishedAt: data.publishedAt,
        name: data.name,
        url: transformBaseUrl(data.url),
        thumbnail: data.thumbnail,
        medium: data.medium,
        small: data.small,
        large: data.large
    }
}