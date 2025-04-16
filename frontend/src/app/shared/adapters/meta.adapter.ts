import { Meta } from "../models";

export const metaAdapter = (meta: any): Meta => {
    return {
        pagination: {
            page: meta.pagination.page,
            pageSize: meta.pagination.pageSize,
            pageCount: meta.pagination.pageCount,
            total: meta.pagination.total,
        }
    }
};