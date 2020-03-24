import {Router} from 'express';

import OngController from './app/controllers/OngController';

import validatorOngStore from './app/validators/OngStore';

const routes = new Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', validatorOngStore, OngController.store)


module.exports = routes;
