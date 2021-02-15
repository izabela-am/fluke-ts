import { getRepository, Repository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

class PurchaseProductService {
  private usersRepository: Repository<User>;

  constructor(private productsRepository: IProductsRepository) {
    this.usersRepository = getRepository(User);
  }

  public async execute(productId: string, userId: string): Promise<Product | undefined> {
    await this.productsRepository.findById(productId);
    await this.usersRepository.update(userId, {
      products_id: productId
    });

    await this.usersRepository.findOne({
      where: productId
    });

    const returnProduct = await this.productsRepository.findById(productId);

    return returnProduct;
  }
}

export default PurchaseProductService;
