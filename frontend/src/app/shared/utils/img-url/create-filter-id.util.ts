interface FilterProps {
  id: number;
  name: string;
}
export const createFilterId = (filterProps: FilterProps): string =>
  `filters[${filterProps.name}][id][$eq]=${filterProps.id}`;
