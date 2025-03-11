import express from 'express';
import {
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  removeUserById,
  removeAllUsers
} from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', addUser);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', removeUserById);
router.delete('/users', removeAllUsers);

export default router;