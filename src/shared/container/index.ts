

import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { dependencies } from "./dependencies";




container.registerSingleton<IUsersRepository>(dependencies.UsersRepository, UsersRepository)