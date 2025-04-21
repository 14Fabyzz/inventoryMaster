import { Request, Response } from 'express';
import UserService from '../services/UserServices';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await UserService.getUserById(Number(id));
        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body;
    try {
        await UserService.updateUser(Number(id), user);
        res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await UserService.deleteUser(Number(id));
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
};

export const getUserByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    try {
        const user = await UserService.getUserByEmail(email);
        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

export const updateEmail = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
        await UserService.updateEmail(Number(id), email);
        res.status(200).json({ message: 'Email actualizado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el email', error });
    }
}



