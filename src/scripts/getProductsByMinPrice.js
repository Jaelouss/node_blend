import { readProducts } from '../utils/readProducts.js';

export const getProductByMinPrice = async (price) => {
  const products = await readProducts();

  const lowerPriceProduct = [];
  for (const product of products) {
    if (product.price <= price) {
      lowerPriceProduct.push(product);
    }
  }
  return lowerPriceProduct;
};

const news = await getProductByMinPrice(600);
console.log('news:', news);
