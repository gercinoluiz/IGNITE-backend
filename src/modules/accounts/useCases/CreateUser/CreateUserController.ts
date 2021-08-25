import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { v4 } from 'uuid';
import { ICreateUserDTO } from '../../../../../dtos/createUserDTO';
import { User } from '../../entities/User';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, name, password, driver_licence }: ICreateUserDTO =
            request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);
        const id = v4();

        const user = await createUserUseCase.execute({
            email,
            name,
            password,
            driver_licence,
            id,
        });

        return response.status(201).json({
            url: `${process.env.URL}/users/${user.id}`,
            user: user,
        });
    }
}

export { CreateUserController };
