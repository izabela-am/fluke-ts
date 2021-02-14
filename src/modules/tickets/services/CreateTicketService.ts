import { getRepository, Repository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import Ticket from '@modules/tickets/infra/typeorm/entities/Ticket';
import ITicketsRepository from '@modules/tickets/repositories/ITicketsRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  customer_name: string;
  customer_cpf: string;
  customer_cellphone: string;
  userId: string;
}

export default class CreateTicketService {
  private usersRepository: Repository<User>

  constructor(private ticketsRepository: ITicketsRepository) {
    this.usersRepository = getRepository(User)
  }

  public async execute({ customer_name, customer_cpf, customer_cellphone, userId }: IRequest): Promise<Ticket> {
    const user = await this.usersRepository.findOne(userId);

    if(user?.cpf !== customer_cpf) {
      throw new AppError('You cannot open a ticket for a CPF you don\'t own');
    }

    const ticket = await this.ticketsRepository.create({
      customer_name,
      customer_cpf,
      customer_cellphone,
      customer_id: userId
    });

    return ticket;
  }
}