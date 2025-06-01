import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const existingProducts = await readProducts();

  for (let i = 1; i <= number; i++) {
    const newProduct = createFakeProduct();
    existingProducts.push(newProduct);
  }

  try {
    await writeProducts(existingProducts);
  } catch (error) {
    console.log(error);
  }
};

await generateProducts(2);
