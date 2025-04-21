import { Request, Response } from "express";
import User from '../Dto/UserDto';
import UserService from '../services/UserServices';

let register = async (req: Request, res: Response) => {
  try {
    const { email, nombres, apellidos, telefono, password} = req.body;
    
    // Registra el usuario
    const registerUser = await UserService.register(new User(email, nombres, apellidos, telefono, password ));

    return res.status(201).json({ status: 'register ok' });
  } catch (error: any) {
    console.error("Error en el registro:", error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ error: "El usuario ya está registrado" });
    }

    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export default register;
