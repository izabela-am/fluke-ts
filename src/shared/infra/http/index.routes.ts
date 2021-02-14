import { Router } from 'express';

import pipipi from './pipipi.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes'
import usersRouter from '@modules/users/infra/http/routes/users.routes'

const routes = Router();

routes.use('/pipipi', pipipi);
routes.use('/registerNewCustomer', usersRouter);
routes.use('/authentication', sessionsRouter);
// routes.use('/productsOrder', products);
// routes.use('/currentPackage', currentPackages);
// routes.use('/portabilityRequest', portability);
// routes.use('/portabilities', allPortabilities);

export default routes;
