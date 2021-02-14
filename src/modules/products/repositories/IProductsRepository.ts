import Product from '@modules/products/infra/typeorm/entities/Product';

interface IProductsRepository {
  findById(id: string): Promise<Product | undefined>;
}

export default IProductsRepository;
