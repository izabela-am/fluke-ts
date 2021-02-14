import { Router } from 'express';

import PurchaseProductService from '@modules/products/services/BuyProductsService';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

const buy = Router();

buy.post('/', async (request, response) => {
  const { productId } = request.query;

  const productsRepository = new ProductsRepository();
  const purchaseProduct = new PurchaseProductService(productsRepository);

  
  if(!productId) {
    throw new Error('Please inform the ID of the desired product');
  }

  const boughtProduct = await purchaseProduct.execute(productId as string);

  return response.json(boughtProduct);
});

export default buy;
