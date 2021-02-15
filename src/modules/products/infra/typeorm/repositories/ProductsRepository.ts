import { getRepository, Repository } from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';
import User from '@modules/users/infra/typeorm/entities/User';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);

    return product;
  }

  public async all(productId: string) {
    const returnProduct = await this.ormRepository.findOne(productId);

    return returnProduct;
  }
}

export default ProductsRepository;
