type PopulateProps = string | string[] | undefined | null;
export const createPopulate = (populate: PopulateProps): string => {
  if (!populate) return 'populate=*';
  if (typeof populate === 'string') return `populate=${populate}`;
  return populate
    .map((populate: string, index: number) => `populate[${index}]=${populate}`)
    .join('&');
};
