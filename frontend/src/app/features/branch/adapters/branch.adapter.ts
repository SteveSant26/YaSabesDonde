import { imageAdapter } from "@shared/adapters/image.adapter";
import { Branch, Branches } from "../models";

export const branchAdapter = (dataClient: any): Branch => {
    const data = dataClient.data || dataClient;
    return {
        id: data.id,
        documentId: data.documentId,
        name: data.name,
        address: data.address,
        description: data.description,
        phone: data.phone,
        image: data.image && data.image.map((img: any) => imageAdapter(img)),
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        publishedAt: data.publishedAt,
    }
}   

export const branchesAdapter = (dataClient: any): Branches => {
    console.log("dataClient", dataClient);
    return {
        data: dataClient.data.map((data: any) => branchAdapter(data)),
        meta: dataClient.meta
    }
}