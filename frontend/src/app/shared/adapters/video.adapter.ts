import { Video } from "@shared/models";
import { transformBaseUrl } from "@shared/utils/image";

export const VideoAdapter = (dataClient: any): Video => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        documentId: data.documentId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        publishedAt: data.publishedAt,
        name: data.name,
        description: data.description,
        url: transformBaseUrl(data.url)
    }
}