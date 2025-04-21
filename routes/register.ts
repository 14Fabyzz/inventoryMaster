import express from "express";
import registerController from '../controllers/register-controller';

const router = express.Router();

router.post('/', (req, res) => {
    console.log("Solicitud recibida en /register", req.body);
    registerController(req, res); 
});

export default router;
