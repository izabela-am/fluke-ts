import { Router } from 'express';

const pipipi = Router();

pipipi.get('/', (request, response) => {
  return response.json({ message: 'popopo'} );
});

export default pipipi;
