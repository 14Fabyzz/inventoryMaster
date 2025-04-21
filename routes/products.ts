import  { Router } from "express";
import verifyToken from "../middleware/VerifyToken";
import * as ProductController  from "../controllers/product-controller";

const router = Router();

router.post('/', verifyToken, ProductController.createProduct);
router.get('/', verifyToken, ProductController.getAllProducts);
router.get('/:id', verifyToken, ProductController.getProductById);
router.put('/:id', verifyToken, ProductController.updateProduct);
router.delete('/:id', verifyToken, ProductController.deleteProduct);
router.patch('/update-descripcion/:id', verifyToken, ProductController.updateDescripcion);


export default router;