import { Response, Router, Request } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/CreateUser/CreateUserController';

const userRouter = Router();


const createUserController = new CreateUserController()

userRouter.post('/', createUserController.handle);


export { userRouter };
