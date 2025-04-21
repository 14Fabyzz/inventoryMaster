import express from 'express';
import verifyToken from '../middleware/VerifyToken';
import * as UserController from '../controllers/users-controller';
import exp from 'constants';

const router = express.Router();

router.get('/all', verifyToken, UserController.getAllUsers);
router.get('/:id', verifyToken, UserController.getUserById);
router.put('/:id', verifyToken, UserController.updateUser);
router.delete('/:id', verifyToken, UserController.deleteUser);
router.get('/email/:email', verifyToken, UserController.getUserByEmail);
router.patch('/email/:id', verifyToken, UserController.updateEmail);

export default router;