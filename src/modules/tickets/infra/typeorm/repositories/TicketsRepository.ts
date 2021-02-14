import { getRepository, Repository } from 'typeorm';

import Ticket from '@modules/tickets/infra/typeorm/entities/Ticket';
import ITicketsRepository from '@modules/tickets/repositories/ITicketsRepository';
import ICreateTicketDTO from '@modules/tickets/dtos/ICreateTicketDTO';

class TicketsRepository implements ITicketsRepository {
  private ormRepository: Repository<Ticket>

  constructor() {
    this.ormRepository = getRepository(Ticket);
  }

  public async create(ticketData: ICreateTicketDTO): Promise<Ticket> {
    const ticket = this.ormRepository.create(ticketData);

    await this.ormRepository.save(ticket);
    return ticket;
  }

  public async save(ticket: Ticket): Promise<Ticket> {
    return this.ormRepository.save(ticket);
  }

  public async findById(id: string): Promise<Ticket | undefined> {
    const ticket = await this.ormRepository.findOne();

    return ticket;
  }

  public async all(id: string) {
    const [ticket, ticketCount] = await this.ormRepository.findAndCount({
      where: id
    });

    return { ticket, ticketCount };
  }
}

export default TicketsRepository;
