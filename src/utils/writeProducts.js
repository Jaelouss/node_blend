import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (updatedProducts) => {
  const data = JSON.stringify(updatedProducts, null, 2);
  try {
    await writeFile(PATH_DB, data, 'utf8');
  } catch (error) {
    console.error('Помилка читання файлу: ', error);
  }
};
