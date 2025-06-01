import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const modifyProducts = async () => {
  const products = await readProducts();

  const modifyProduct = products.map(({ description, ...rest }) => rest);

  writeProducts(modifyProduct);
};

await modifyProducts();
