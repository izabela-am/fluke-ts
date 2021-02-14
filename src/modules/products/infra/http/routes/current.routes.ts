import { Router } from 'express';

import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

const current = Router();
current.get('/', async (request, response) => {
  const id = request.user.id;
  
  const productsRepository = new ProductsRepository();
  const products = await productsRepository.all(id)

  const returnedData = {
    tickets: products.product,
    bought_products: products.productCount
  }

  return response.json(returnedData);
});

export default current;