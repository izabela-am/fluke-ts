import { Router } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ensureAuthentication from '@modules/users/infra/http/middlewares/EnsureAuthentication';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
	const { name, email, password, cpf, cellphone } = request.body;
	
	const usersRepository = new UsersRepository();
	const createUser = new CreateUserService(usersRepository);

	const user = await createUser.execute({
		name,
		email,
		password,
		cpf,
		cellphone
	});

	const filteredUserData = {
		id: user.id,
		name: user.name,
		email: user.email,
		created_at: user.created_at,
		updated_at: user.updated_at,
	};

	return response.json(filteredUserData);
});

export default usersRouter;
