
import { Pagination } from "../models";

export interface ApiResponse<T> {
    data: T;
    meta: {
        pagination: Pagination;
    };
}