import { Product } from "@features/product/models";



export const separateProductsByCategory = (products?: Product[]) :[string, Product[]][] | null => {
  if (!products) {
    return null;
  }
  const categories: any = {};

  products.forEach((product: Product) => {
    if (!categories[product.categoryProducts?.name as string]) {
      categories[product.categoryProducts?.name as string] = [];
    }

    categories[product.categoryProducts?.name as string].push(product);
  });

  return Object.entries(categories);
};