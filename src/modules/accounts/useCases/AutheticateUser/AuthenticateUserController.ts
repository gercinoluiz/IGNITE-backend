import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ICreateUserDTO } from '../../../../../dtos/createUserDTO';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email,  password,  }: ICreateUserDTO =
            request.body;

        const authenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );

        const authInfo = await authenticateUserUseCase.execute({
            email,

            password,
        });

        return response.status(200).json(authInfo);
    }
}

export { AuthenticateUserController };
