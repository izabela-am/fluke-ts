import { Router } from 'express';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';
import auth from '@modules/users/infra/http/middlewares/EnsureAuthentication';

const current = Router();
current.get('/', auth, async (request, response) => {
  const id = request.user.id;
  
  const usersRepository = new UsersRepository();
  const productsRepository = new ProductsRepository();

  const user = await usersRepository.findById(id)
  const products = user?.products_id;

  const returnProd = await productsRepository.all(products as string);

  return response.json(returnProd);
});

export default current;