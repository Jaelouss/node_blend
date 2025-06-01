import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  const products = await readProducts();

  const category = [];
  for (const product of products) {
    category.push(product.category);
  }

  return [...new Set(category)];
};

const category = await getUniqueCategories();
console.log('cat:', category);
