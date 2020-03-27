import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';

import validatorOngStore from './app/validators/OngStore';
import validatorIncidentStore from './app/validators/IncidentStore';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validatorOngStore, OngController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', validatorIncidentStore, IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

export default routes;
