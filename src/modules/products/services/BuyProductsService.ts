import AppError from '@shared/errors/AppError';
import Product from '@modules/products/infra/typeorm/entities/Product';
import IProductsRepository from '@modules/products/repositories/IProductsRepository';

class PurchaseProductService {
  constructor(private productsRepository: IProductsRepository) {}

  public async execute(productId: string): Promise<Product | undefined> {
    const product = this.productsRepository.findById(productId);

    return product;
  }
}

export default PurchaseProductService;
