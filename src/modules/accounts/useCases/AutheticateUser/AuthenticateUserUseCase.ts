import { inject, injectable } from 'tsyringe';
import { dependencies } from '../../../../shared/container/dependencies';
import { IUsersRepository } from '../../repositories/IUsersRepository';

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { User } from '../../entities/User';

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject(dependencies.UsersRepository)
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        // O user existe?

        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error('Email or password incorret');
        }

        if (!user.password) {
            throw new Error('Email or password incorret');
        }

        // Comparando as duas senhas

        const passwordMatch = compare(password, user.password);

        // A Senha esta certa?
        if (!passwordMatch) {
            throw new Error('Email or password incorret');
        }

        //Gerar o token

        const token = sign({}, process.env.JWT_TOKEN || '', {
            subject: user.id,
            expiresIn: process.env.JWT_TOKEN_EXPIRES_IN,
        });

        return {
            token,
            user
        };
    }
}

export { AuthenticateUserUseCase };
