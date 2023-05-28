import express from 'express';
import UserController from '@controllers/UserController'
import ProjectController from '@controllers/ProjetoController'

const routes = express.Router();
const userController = new UserController();
const projectController = new ProjectController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/projects',projectController.create);
routes.get('/projects', projectController.get);
routes.delete('/projects/:id', projectController.delete);
routes.put('/projects/:id', projectController.update);

export default routes;