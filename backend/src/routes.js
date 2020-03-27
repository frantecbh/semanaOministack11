const express = require('express')
const OngController = require('./controler/OngController')
const IncidentController = require('./controler/IncidenteController')
const ProfileController = require('./controler/ProfileController')
const SessionController = require('./controler/SessionControler')


const routes = express.Router();


routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post("/ongs", OngController.create);


routes.get('/profile', ProfileController.index);


routes.get('/incidents', IncidentController.index);
routes.post("/incidents", IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;