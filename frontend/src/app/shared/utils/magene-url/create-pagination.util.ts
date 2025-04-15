import { IPaginationProps } from '../../types';

export const createPagination = (paginationProps: IPaginationProps): string =>
  `pagination[page]=${paginationProps.page}&pagination[pageSize]=${paginationProps.pageSize}`;
