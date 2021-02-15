import { Router } from 'express';

import PurchaseProductService from '@modules/products/services/BuyProductsService';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import auth from '@modules/users/infra/http/middlewares/EnsureAuthentication';

const buy = Router();

buy.post('/', auth, async (request, response) => {
  const { productId } = request.query;
  const userId = request.user.id;

  const productsRepository = new ProductsRepository();
  const purchaseProduct = new PurchaseProductService(productsRepository);

  const boughtProduct = await purchaseProduct.execute(productId as string, userId);

  return response.json(boughtProduct);
});

export default buy;
