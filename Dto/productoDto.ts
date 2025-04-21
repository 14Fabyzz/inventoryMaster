class Product {
    private _nombre: string;
    private _descripcion: string;
    private _precio: number;
    private _stock: number;
  
    constructor(nombre: string, descripcion: string, precio: number, stock: number) {
      this._nombre = nombre;
      this._descripcion = descripcion;
      this._precio = precio;
      this._stock = stock;
    }
  
    get nombre(): string {
      return this._nombre;
    }
  
    get descripcion(): string {
      return this._descripcion;
    }
  
    get precio(): number {
      return this._precio;
    }
  
    get stock(): number {
      return this._stock;
    }
  
    set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    set descripcion(descripcion: string) {
      this._descripcion = descripcion;
    }
  
    set precio(precio: number) {
      this._precio = precio;
    }
  
    set stock(stock: number) {
      this._stock = stock;
    }
  }
  
  export default Product;
  