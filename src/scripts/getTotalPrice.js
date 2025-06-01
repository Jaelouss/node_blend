import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  const products = await readProducts();

  const priceSum = products.reduce((sum, product) => {
    return sum + Number(product.price);
  }, 0);

  return priceSum;
};

const sum = await getTotalPrice();
console.log('sum:', sum);
