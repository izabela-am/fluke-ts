import { Router } from 'express';

import pipipi from './pipipi.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'
import portability from '@modules/tickets/infra/http/routes/portability.routes';
import allTickets from '@modules/tickets/infra/http/routes/allTickets.routes'

const routes = Router();

routes.use('/pipipi', pipipi);
routes.use('/registerNewCustomer', usersRouter);
routes.use('/authentication', sessionsRouter);
// routes.use('/productsOrder', products);
// routes.use('/currentPackage', currentPackages);
routes.use('/portabilityRequest', portability);
routes.use('/portabilities', allTickets);

export default routes;
