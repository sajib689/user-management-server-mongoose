import express from 'express';
import { usersCreateController, usersDeleteController, usersFindByIdController, usersFindController, usersUpdateController } from '../controller/users.controller.js';

const useRouter = express.Router();

useRouter.get('/users', usersFindController)
useRouter.post('/register', usersCreateController)
useRouter.patch('/users/:id', usersUpdateController)
useRouter.get('/users/:id', usersFindByIdController)
useRouter.delete('/users/:id', usersDeleteController)
export default useRouter;