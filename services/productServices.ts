import db from '../config/config-db';
import Product from '../Dto/productoDto';

export const ProductService = {
  create: async (data: Product) => {
    const [result] = await db.execute(
      'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)',
      [data.nombre, data.descripcion, data.precio, data.stock]
    );

    const insertId = (result as any).insertId;

    return {
      id: insertId,
      nombre: data.nombre,
      descripcion: data.descripcion,
      precio: data.precio,
      stock: data.stock,
    };
  },

  getAll: async () => {
    const [rows] = await db.execute('SELECT * FROM productos');
    return rows;
  },

  getById: async (id: number) => {
    const [rows]: any = await db.execute('SELECT * FROM productos WHERE id = ?', [id]);
    return rows[0] || null;
  },

  update: async (id: number, data: Product) => {
    await db.execute(
      'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?',
      [data.nombre, data.descripcion, data.precio, data.stock, id]
    );
    return { id, ...data };
  },

  delete: async (id: number) => {
    await db.execute('DELETE FROM productos WHERE id = ?', [id]);
  },

  updateDescripcion: async (id: number, descripcion: string) => {
    await db.execute(
      'UPDATE productos SET descripcion = ? WHERE id = ?',
      [descripcion, id]
    );
  }, 

};
