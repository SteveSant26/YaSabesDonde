import { imageAdapter } from "@shared/adapters"
import { Home } from "../models"

export const homeAdapter = (data: any): Home => {
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
            btnText: data.hero.btnText
        }
    }
}