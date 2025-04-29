import { imageAdapter } from "@shared/adapters"
import { AboutUs } from "../models"

export const aboutUsAdapter = (dataClient: any): AboutUs => {
    const data = dataClient.data || dataClient;
    return {
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        id: data.id,
        documentId: data.documentId,
        publishedAt: data.publishedAt,
        hero: {
            title: data.hero.title,
            description: data.hero.description,
            image: imageAdapter(data.hero.image),
            btnText: data.hero.btnText,
            poster: imageAdapter(data.hero.poster),
        }
    }
}