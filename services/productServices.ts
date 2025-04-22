import ProductRepository from '../repositories/productRepository';
import Product from '../Dto/productoDto';

class ProductService {

    static async addProduct(product: Product) {
        return await ProductRepository.add(product);
    }

    static async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }

    static async getProductById(id: number) {
        return await ProductRepository.getProductById(id);
    }

    static async updateProduct(id: number, product: Product) {
        return await ProductRepository.updateProduct(id, product);
    }

    static async deleteProduct(id: number) {
        return await ProductRepository.deleteProduct(id);
    }

    static async updateDescripcion(id: number, descripcion: string) {
        return await ProductRepository.updateDescripcion(id, descripcion);
    }

}

export default ProductService;
