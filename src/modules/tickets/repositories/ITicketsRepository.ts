import Ticket from '@modules/tickets/infra/typeorm/entities/Ticket';
import ICreateTicketDTO from '@modules/tickets/dtos/ICreateTicketDTO';

interface IUsersRepository {
  create(data: ICreateTicketDTO): Promise<Ticket>;
  save(ticket: Ticket): Promise<Ticket>;
  findById(cpf: string): Promise<Ticket | undefined>;
}

export default IUsersRepository;
