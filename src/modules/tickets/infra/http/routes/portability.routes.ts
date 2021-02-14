import { Router } from 'express';

import TicketsRepository from '../../typeorm/repositories/TicketsRepository';
import CreateTicketService from '../../../services/CreateTicketService';
import auth from '@modules/users/infra/http/middlewares/EnsureAuthentication';

const portability = Router();

portability.post('/', auth, async (request, response) => {
  const { name, cpf, cellphone } = request.body;
  const id = request.user.id;

  const ticketsRepository = new TicketsRepository();
  const createTicket = new CreateTicketService(ticketsRepository);

  const ticket = await createTicket.execute({
    customer_name: name,
    customer_cpf: cpf,
    customer_cellphone: cellphone,
    userId: id
  });

  return response.json(ticket)
});

export default portability;
