interface FilterProps {
  key: string;
  value: string;
}
export const createFilterAttributes = (filterProps: FilterProps[]): string => {
  return filterProps
    .map(
      (filter: FilterProps, index: number) =>
        `filters[${filter.key}]=${filter.value}`
    )
    .join('&');
};
