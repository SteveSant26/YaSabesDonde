type PopulateProps = string | string[] | null;
export const createPopulate = (pupulate: PopulateProps): string => {
  if (!pupulate) return 'populate=*';
  if (typeof pupulate === 'string') return `populate=${pupulate}`;
  return pupulate
    .map((populate: string, index: number) => `populate[${index}]=${populate}`)
    .join('&');
};
