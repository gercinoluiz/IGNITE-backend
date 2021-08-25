import { getRepository, Repository } from 'typeorm';
import { v4 } from 'uuid';
import { ICreateUserDTO } from '../../../../../dtos/createUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
     repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.repository.findOne({ email });

        return user;
    }

    async create({
        email,
        name,
        password,
        driver_licence,
        id
        
    }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_licence,
            id
        });

        await this.repository.save(user);

        return user;
    }
}

export { UsersRepository };
