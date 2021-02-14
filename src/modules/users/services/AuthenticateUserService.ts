import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ email, password }: Request): Promise<Response> {
    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const doPasswordsMatch = await compare(password, user.password);

    if(!doPasswordsMatch) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const tokenSubject = (user.id).toString()
    const token = sign({}, secret, {
      subject: tokenSubject,
      expiresIn
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
