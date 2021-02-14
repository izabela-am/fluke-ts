import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellphone: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password, cpf, cellphone }: IRequest): Promise<User> {
    const isEmailAlreadyInUse = await this.usersRepository.findByEmail(email);

    if(isEmailAlreadyInUse) {
      throw new AppError('This email is already being used');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      cpf,
      cellphone
    });

    return user;
  }
}

export default CreateUserService;
