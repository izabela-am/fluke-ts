import { Router } from 'express';

import TicketsRepository from '../../typeorm/repositories/TicketsRepository';
import auth from '@modules/users/infra/http/middlewares/EnsureAuthentication';

const allTickets = Router();

allTickets.get('/', auth, async (request, response) => {
  const id = request.user.id;

  const ticketsRepository = new TicketsRepository();
  const { ticket, ticketCount } = await ticketsRepository.all(id)

  const returnedData = {
    tickets: ticket,
    opened_tickets: ticketCount
  }

  return response.json(returnedData)
});

export default allTickets;
