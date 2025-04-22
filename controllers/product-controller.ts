import { Request, Response } from 'express';
import ProductService from '../services/productServices';
import Product from '../Dto/productoDto';

class ProductController {

    static async addProduct(req: Request, res: Response) {
        try {
            const product: Product = req.body;
            const result = await ProductService.addProduct(product);
            res.status(201).json({ message: 'Producto agregado correctamente'});
        } catch (error) {
            res.status(500).json({ message: 'Error al agregar el producto', error });
        }
    }

    static async getAllProducts(req: Request, res: Response) {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener productos', error });
        }
    }

    static async getProductById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const product = await ProductService.getProductById(id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el producto', error });
        }
    }

    static async updateProduct(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const product: Product = req.body;
            const result = await ProductService.updateProduct(id, product);
            res.status(200).json({ message: 'Producto actualizado correctamente'});
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el producto', error });
        }
    }

    static async deleteProduct(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await ProductService.deleteProduct(id);
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el producto', error });
        }
    }

    static async updateDescripcion(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { descripcion } = req.body;
            const result = await ProductService.updateDescripcion(id, descripcion);
            res.status(200).json({ message: 'Descripción actualizada correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar la descripción', error });
        }
    }

}

export default ProductController;
