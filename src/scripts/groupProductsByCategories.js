import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  const products = await readProducts();

  const sortByCategories = {};
  for (const product of products) {
    const category = product.category;
    if (!sortByCategories[category]) {
      sortByCategories[category] = [];
    }
    sortByCategories[category].push(product);
  }
  return sortByCategories;
};

const sort = await groupProductsByCategories();
console.log('sort:', sort);
