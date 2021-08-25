import { ICreateUserDTO } from '../../../../dtos/createUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email:string): Promise<User | undefined>;
}

export { IUsersRepository };
