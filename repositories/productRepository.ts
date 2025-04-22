import db from '../config/config-db';
import Product from '../Dto/productoDto';

class ProductRepository {
    static async add(product: Product) {
        const sql = 'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)';
        const values = [product.nombre, product.descripcion, product.precio, product.stock];
        return db.execute(sql, values);
    }

    static async getAllProducts() {
        const sql = 'SELECT * FROM productos';
        return db.execute(sql);
    }

    static async getProductById(id: number) {
        const sql = 'SELECT * FROM productos WHERE id = ?';
        return db.execute(sql, [id]);
    }

    static async updateProduct(id: number, product: Product) {
        const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?';
        const values = [product.nombre, product.descripcion, product.precio, product.stock, id];
        return db.execute(sql, values);
    }

    static async deleteProduct(id: number) {
        const sql = 'DELETE FROM productos WHERE id = ?';
        return db.execute(sql, [id]);
    }

    static async updateDescripcion(id: number, descripcion: string) {
        const sql = 'UPDATE productos SET descripcion = ? WHERE id = ?';
        return db.execute(sql, [descripcion, id]);
    }
}
export default ProductRepository;