import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from '../../../../../dtos/createUserDTO';
import { dependencies } from '../../../../shared/container/dependencies';
import { hash } from 'bcrypt';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject(dependencies.UsersRepository)
        private usersRepository: IUsersRepository
    ) {}

    async execute({ email, name, driver_licence, password, id }: ICreateUserDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('User Already Exists');
        }

        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.create({
            email,
            name,
            driver_licence,
            password: hashedPassword,
            id
        });

        return user;
    }
}

export { CreateUserUseCase };
